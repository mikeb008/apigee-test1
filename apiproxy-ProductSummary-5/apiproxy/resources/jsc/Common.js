var CURRENT_ACCOUNT = context.getVariable("CURRENT_ACCOUNT");
var LOAN_ACCOUNT = context.getVariable("LOAN_ACCOUNT");
var DEPOSIT_ACCOUNT = context.getVariable("DEPOSIT_ACCOUNT");
var defaultCurrency = context.getVariable("defaultCurrency");

function extractId() {
    var path = context.proxyRequest.path.trim();
    return path.substring(path.lastIndexOf('/')+1);
}

function extractDebitAccountId() {
    var path = context.proxyRequest.path.trim();
    var debitAccountIdPos = path.indexOf("debitAccountId");
    if(debitAccountIdPos > -1) {
        var debitAccountIdPhrase = path.substring(debitAccountIdPos);
        var debitAccountId = path.split("=")[1];
        return debitAccountId;
    }
    return undefined;
}

function getSapErrors(targetResponse) {
    var errors = targetResponse.Body.BankAccountContractOverviewRetrievalFSByElementsResponse.Log.Item;
    
    var errorMessage = {message:""};
    var trigger404 = false;
    
    //if errors is an array, list all the errors
    if(errors.constructor === Array) {
        for(k = 0; k < errors.length; k++) {
            var error = errors[k];
            errorMessage.message = errorMessage.message + error.Note.TEXT + ". ";
            if(error.Note.TEXT.includes("found")) {
                trigger404 = true;
            }
        }
    } else { //if it just one item, list the error
        errorMessage.message = errorMessage.message + errors.Note.TEXT + ". ";
        if(errors.Note.TEXT.includes("found")) {
            trigger404 = true;
        }
    }
    
    return {"trigger404":trigger404,"errorMessage":errorMessage};
}

function getBalance(balanceArray, code) {
    if(balanceArray !== undefined) {
        for(j = 0; j < balanceArray.length; j++) {
            var balance = balanceArray[j];
            print("code is:",balance.Code.TEXT, " :: looking for: " + code, " match? ", (balance.Code.TEXT == code));
            if(balance.Code.TEXT == code) {
                return balance.Amount.TEXT;
            }
        }
    }
    return 0.0;
}

function getProductBase(contractOverview) {
    var product = {};
    product.id = contractOverview.ID.TEXT;
    //product.name = contractOverview.ID.TEXT;
    product.name = contractOverview.BankAccount.IdentifyingElements.ID;
    product.alias = contractOverview.UsageNote;
    //product.externalTransferAllowed = false; //not present until further notice
    //product.crossCurrencyAllowed //not avb in SAP
    //product.productKindName //mapping unclear
    product.routingId = "" + contractOverview.BankAccount.IdentifyingElements.Bank.RoutingID;
    product.countryCode = contractOverview.BankAccount.IdentifyingElements.Bank.CountryCode;
    product.productTypeName = contractOverview.TypeName.TEXT;
    return product;
}
    
function getProductSummary(targetResponse) {
    var productSummaryResponse = {};
    productSummaryResponse.currentAccounts = {};
    productSummaryResponse.currentAccounts.name = "Current Account";
    productSummaryResponse.currentAccounts.products = [];
    productSummaryResponse.currentAccounts.aggregatedBalance = {};
    
    productSummaryResponse.termDeposits = {};
    productSummaryResponse.termDeposits.name = "Terminal Deposits";
    productSummaryResponse.termDeposits.products = [];
    productSummaryResponse.termDeposits.aggregatedBalance = {};
    
    productSummaryResponse.loans = {};
    productSummaryResponse.loans.name = "Loan Account";
    productSummaryResponse.loans.products = [];
    productSummaryResponse.loans.aggregatedBalance = {};
    
    var sapProductArray = targetResponse.Body.BankAccountContractOverviewRetrievalFSByElementsResponse.BankAccountContractOverviewRetrieval;
    
    //init aggregate amounts
    var aggregateBalanceAmount = 0.0;
    var typeAggregateMap = {};
    
    typeAggregateMap["CURRENT_ACCOUNT"] = 0.0;
    typeAggregateMap["LOAN_ACCOUNT"] = 0.0;
    typeAggregateMap["DEPOSIT_ACCOUNT"] = 0.0;
    
    if(sapProductArray !== undefined) {
        for(i = 0; i < sapProductArray.length; i++) {
            print("processing: ", sapProductArray[i].TypeName.TEXT, ": ", sapProductArray[i].ID.TEXT);
            var contractOverview = sapProductArray[i];
            var bookedBalance = getBalance(contractOverview.BalanceKeyFigure,6);
            aggregateBalanceAmount = aggregateBalanceAmount + bookedBalance;
            
            var product = getProductBase(contractOverview);
            if(contractOverview.TypeCode.TEXT == CURRENT_ACCOUNT) { //current account
                product.bookedBalance = bookedBalance;
                product.availableBalance = getBalance(contractOverview.BalanceKeyFigure,10);
                product.creditLimit = getBalance(contractOverview.BalanceKeyFigure,15);
                //product.IBAN;
                //product.BBAN;
                product.currency = contractOverview.CurrencyCode;
                //product.urgentTransferAllowed;
                typeAggregateMap["CURRENT_ACCOUNT"] = typeAggregateMap["CURRENT_ACCOUNT"] + bookedBalance;
                productSummaryResponse.currentAccounts.name = contractOverview.Product.BankAccountContractProductionControl.Description;
                productSummaryResponse.currentAccounts.products.push(product);
            }
            
            if(contractOverview.TypeCode.TEXT == LOAN_ACCOUNT) { //current account
                product.bookedBalance = bookedBalance;
                //product.principalAmount = 
                product.currency = contractOverview.CurrencyCode;
                //product.urgentTransferAllowed;
                //product.productNumber = 
                typeAggregateMap["LOAN_ACCOUNT"] = typeAggregateMap["LOAN_ACCOUNT"] + bookedBalance;
                productSummaryResponse.loans.name = contractOverview.Product.BankAccountContractProductionControl.Description;
                productSummaryResponse.loans.products.push(product);
            }
            
            if(contractOverview.TypeCode.TEXT == DEPOSIT_ACCOUNT) { //current account
                //product.principalAmount = 
                //product.accruedInterest = 
                product.currency = contractOverview.CurrencyCode;
                //product.urgentTransferAllowed;
                //product.productNumber = 
                typeAggregateMap["DEPOSIT_ACCOUNT"] = typeAggregateMap["DEPOSIT_ACCOUNT"] + 0;
                productSummaryResponse.termDeposits.name = contractOverview.Product.BankAccountContractProductionControl.Description;
                productSummaryResponse.termDeposits.products.push(product);
            }
        }
    }
    

    //add aggregated balance object
    productSummaryResponse.aggregatedBalance = {};
    
    if(sapProductArray !== undefined) {
        defaultCurrency = sapProductArray[0].BalanceKeyFigure[0].Amount.currencyCode;
    } 
    productSummaryResponse.aggregatedBalance.currency = defaultCurrency;
    productSummaryResponse.aggregatedBalance.value = aggregateBalanceAmount;
    
    productSummaryResponse.currentAccounts.aggregatedBalance = {"value":typeAggregateMap["CURRENT_ACCOUNT"], "currency":defaultCurrency};
    productSummaryResponse.loans.aggregatedBalance = {"value":typeAggregateMap["LOAN_ACCOUNT"], "currency":defaultCurrency};
    productSummaryResponse.termDeposits.aggregatedBalance = {"value":typeAggregateMap["DEPOSIT_ACCOUNT"], "currency":defaultCurrency};
    
    return productSummaryResponse;
}
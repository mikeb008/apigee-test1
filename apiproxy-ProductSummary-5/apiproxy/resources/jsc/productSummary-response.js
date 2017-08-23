var targetResponse = JSON.parse(context.getVariable("sap.json.response"));

if(targetResponse.Body.BankAccountContractOverviewRetrievalFSByElementsResponse.Log.Item !== undefined) {
    var errorObj = getSapErrors(targetResponse);
    if(errorObj.trigger404 == true) {
        context.setVariable("trigger404", "true");
    } else {
        context.setVariable("trigger400", "true");
    }
    context.proxyResponse.content = JSON.stringify(errorObj.errorMessage);
} else {
    context.proxyResponse.content = JSON.stringify(getProductSummary(targetResponse));
}

context.proxyResponse.headers['Content-Type']='application/json; charset=utf8';
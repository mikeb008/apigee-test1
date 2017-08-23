
var clientId = extractId();
var debitAccountId = extractDebitAccountId();
//print("id extracted is: [",clientId, "] from path: [", context.proxyRequest.path, "] clientId length ",clientId.length);
if(clientId == undefined || debitAccountId == undefined || clientId.length < 1) {
    context.setVariable("trigger400", "true");
    context.proxyResponse.headers['Content-Type']='application/json; charset=utf8';
    context.proxyResponse.content = JSON.stringify({message:"clientId and/or debitAccountId not provided. These parameters are required"});
} else {
    context.proxyResponse.headers['Content-Type']='application/json; charset=utf8';
    context.proxyResponse.content = JSON.stringify({
  "currentAccounts": {
    "name": "DSY TRANSACTIONAL PRODUCT",
    "products": [
      {
        "id": "00000010222322863",
        "name": "00000010222322863                  679000         ZA",
        "alias": "test",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 0,
        "availableBalance": 0,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000010402839740",
        "name": "00000010402839740                  679000         ZA",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 0,
        "availableBalance": 0,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000010784361071",
        "name": "00000010784361071                  679000         ZA",
        "alias": "test m",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 0,
        "availableBalance": 0,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000011296258955",
        "name": "00000011296258955                  679000         ZA",
        "alias": "Testing Tanki's account creation",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 20000,
        "availableBalance": 20000,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000011981417680",
        "name": "00000011981417680                  679000         ZA",
        "alias": "TETS",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 0,
        "availableBalance": 0,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000012245270906",
        "name": "00000012245270906                  679000         ZA",
        "alias": "Testing Budget calculations",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 60000,
        "availableBalance": 60000,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000012620258187",
        "name": "00000012620258187                  679000         ZA",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 300000,
        "availableBalance": 300000,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000014170161712",
        "name": "00000014170161712                  679000         ZA",
        "alias": "test forward order - Tanki",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 75000,
        "availableBalance": 75000,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000015279014527",
        "name": "00000015279014527                  679000         ZA",
        "alias": "test",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 0,
        "availableBalance": 0,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000017160113259",
        "name": "00000017160113259                  679000         ZA",
        "alias": "Testing purpose",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 199.99,
        "availableBalance": 199.99,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000017838643103",
        "name": "00000017838643103                  679000         ZA",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 29742.5,
        "availableBalance": 29742.5,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000017872776285",
        "name": "00000017872776285                  679000         ZA",
        "alias": "Another one for testing",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 5000,
        "availableBalance": 5000,
        "creditLimit": 0,
        "currency": "ZAR"
      },
      {
        "id": "00000019727360136",
        "name": "00000019727360136                  679000         ZA",
        "alias": "For Testing",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Current Account Contract",
        "bookedBalance": 55000,
        "availableBalance": 55000,
        "creditLimit": 0,
        "currency": "ZAR"
      }
    ],
    "aggregatedBalance": {
      "value": 544942.49,
      "currency": "ZAR"
    }
  },
  "termDeposits": {
    "name": "DSY FIXED TERM DEPOSIT",
    "products": [
      {
        "id": "00000010185590006",
        "name": "00000010185590006                  679000         ZA",
        "alias": "Test",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Deposit Account Contract",
        "currency": "ZAR"
      },
      {
        "id": "00000011372259538",
        "name": "00000011372259538                  679000         ZA",
        "alias": "For Tanki To Test",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Deposit Account Contract",
        "currency": "ZAR"
      },
      {
        "id": "00000011527214400",
        "name": "00000011527214400                  679000         ZA",
        "alias": "test With X",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Deposit Account Contract",
        "currency": "ZAR"
      },
      {
        "id": "00000011743018940",
        "name": "00000011743018940                  679000         ZA",
        "alias": "test fix deposit - service",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Deposit Account Contract",
        "currency": "ZAR"
      },
      {
        "id": "00000013478897625",
        "name": "00000013478897625                  679000         ZA",
        "alias": "test today",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Deposit Account Contract",
        "currency": "ZAR"
      },
      {
        "id": "00000016955219694",
        "name": "00000016955219694                  679000         ZA",
        "alias": "Fix term deposit account",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Deposit Account Contract",
        "currency": "ZAR"
      },
      {
        "id": "00000019181733610",
        "name": "00000019181733610                  679000         ZA",
        "alias": "test new",
        "routingId": "679000",
        "countryCode": "ZA",
        "productTypeName": "Deposit Account Contract",
        "currency": "ZAR"
      }
    ],
    "aggregatedBalance": {
      "value": 0,
      "currency": "ZAR"
    }
  },
  "loans": {
    "name": "Loan Account",
    "products": [],
    "aggregatedBalance": {
      "value": 0,
      "currency": "ZAR"
    }
  },
  "aggregatedBalance": {
    "currency": "ZAR",
    "value": 546942.49
  }
});
}

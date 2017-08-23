context.proxyResponse.content = JSON.stringify(context.getVariable("swagger"));
context.proxyResponse.headers['Content-Type']='application/json; charset=utf8';
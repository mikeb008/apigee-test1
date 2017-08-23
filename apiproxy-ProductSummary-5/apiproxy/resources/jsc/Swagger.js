context.setVariable("swagger",{
  "swagger" : "2.0",
  "info" : {
    "version" : "1.0",
    "title" : "Product Summary"
  },
  "host" : context.getVariable('request.header.host'),
  "basePath" : "/v1/productsummary",
  "schemes" : [ "http" ],
  "consumes" : [ "application/json" ],
  "produces" : [ "application/json" ],
  "paths" : {
    "/openapi.json" : {
      "get" : {
        "description" : "Retrieve Open API specification for this api.",
        "parameters" : [ ],
        "operationId" : "get-openapi",
        "responses" : {
          "200" : {
            "description" : "The Open API spec",
            "schema" : {
              "type" : "string"
            }
          }
        }
      }
    },
    "/debitaccounts/{clientId}" : {
      "get" : {
        "description" : "All accounts available to transfer from",
        "parameters" : [ {
          "in" : "path",
          "name" : "clientId",
          "description" : "The client ID to whom the product belong",
          "type" : "string",
          "required" : true
        } ],
        "operationId" : "productSummaryDebitAccounts",
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/ProductSummaryResponse"
            }
          },
          "400" : {
            "description" : "BadRequest",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "422" : {
            "description" : "Unprocessable Entity",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Unauthorized",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "InternalServerError",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "Forbidden",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Not Found",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/creditaccounts/{clientId}" : {
      "get" : {
        "description" : "All accounts available for transfer to",
        "parameters" : [ {
          "in" : "query",
          "name" : "debitAccountId",
          "description" : "The debit account id to filter with",
          "type" : "string",
          "required" : true
        }, {
          "in" : "path",
          "name" : "clientId",
          "description" : "The client ID to whom the product belong",
          "type" : "string",
          "required" : true
        } ],
        "operationId" : "productSummaryCreditAccounts",
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/ProductSummaryResponse"
            }
          },
          "400" : {
            "description" : "BadRequest",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "422" : {
            "description" : "Unprocessable Entity",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Unauthorized",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "InternalServerError",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "Forbidden",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Not Found",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/{clientId}" : {
      "get" : {
        "description" : "Retrieve list of products summaries.",
        "parameters" : [ {
          "in" : "path",
          "name" : "clientId",
          "description" : "The client ID to whom the product belong",
          "type" : "string",
          "required" : true
        } ],
        "operationId" : "productSummary",
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/ProductSummaryResponse"
            }
          },
          "400" : {
            "description" : "BadRequest",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "422" : {
            "description" : "Unprocessable Entity",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Unauthorized",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "InternalServerError",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "Forbidden",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Not Found",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/accounts/{clientId}" : {
      "put" : {
        "description" : "Edit user editable properties of a single account.",
        "parameters" : [ {
          "in" : "query",
          "name" : "accountId",
          "description" : "The debit account id to filter with",
          "type" : "string",
          "required" : true
        }, {
          "in" : "path",
          "name" : "clientId",
          "description" : "The client ID to whom the product belong",
          "type" : "string",
          "required" : true
        }, {
          "in" : "query",
          "name" : "alias",
          "description" : "The user friendly account name to use",
          "type" : "string",
          "required" : true
        } ],
        "operationId" : "PutAccounts",
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/PutAccountsResponse"
            }
          },
          "400" : {
            "description" : "BadRequest",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "422" : {
            "description" : "Unprocessable Entity",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Unauthorized",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "InternalServerError",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "Forbidden",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Not Found",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    }
  },
  "definitions" : {
    "Loans" : {
      "title" : "Loans",
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "aggregatedBalance" : {
          "$ref" : "#/definitions/AggregatedBalance"
        },
        "products" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Loan"
          }
        }
      }
    },
    "CurrentAccount" : {
      "title" : "CurrentAccount",
      "type" : "object",
      "properties" : {
        "routingId" : {
          "type" : "string"
        },
        "IBAN" : {
          "type" : "string"
        },
        "crossCurrencyAllowed" : {
          "type" : "string"
        },
        "urgentTransferAllowed" : {
          "type" : "boolean"
        },
        "productKindName" : {
          "type" : "string"
        },
        "availableBalance" : {
          "format" : "double",
          "type" : "number"
        },
        "BBAN" : {
          "type" : "string"
        },
        "bookedBalance" : {
          "type" : "string"
        },
        "countryCode" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "productTypeName" : {
          "type" : "string"
        },
        "creditLimit" : {
          "format" : "double",
          "type" : "number"
        },
        "externalTransferAllowed" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string"
        }
      },
      "required" : [ "id", "routingId", "countryCode" ]
    },
    "DebitCards" : {
      "title" : "DebitCards",
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "aggregatedBalance" : {
          "$ref" : "#/definitions/AggregatedBalance"
        },
        "products" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/DebitCard"
          }
        }
      }
    },
    "CreditCards" : {
      "title" : "CreditCards",
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "aggregatedBalance" : {
          "$ref" : "#/definitions/AggregatedBalance"
        },
        "products" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/CreditCard"
          }
        }
      }
    },
    "SavingsAccounts" : {
      "title" : "SavingsAccounts",
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "aggregatedBalance" : {
          "$ref" : "#/definitions/AggregatedBalance"
        },
        "products" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/SavingsAccount"
          }
        }
      }
    },
    "DebitCard" : {
      "title" : "DebitCard",
      "type" : "object",
      "properties" : {
        "number" : {
          "type" : "string"
        },
        "routingId" : {
          "type" : "string"
        },
        "countryCode" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "crossCurrencyAllowed" : {
          "type" : "string"
        },
        "urgentTransferAllowed" : {
          "type" : "boolean"
        },
        "alias" : {
          "type" : "string"
        },
        "productKindName" : {
          "type" : "string"
        },
        "productTypeName" : {
          "type" : "string"
        },
        "externalTransferAllowed" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string"
        },
        "cardNumber" : {
          "type" : "string"
        }
      },
      "required" : [ "id", "routingId", "countryCode" ]
    },
    "InvestmentAccount" : {
      "title" : "InvestmentAccount",
      "type" : "object",
      "properties" : {
        "routingId" : {
          "type" : "string"
        },
        "crossCurrencyAllowed" : {
          "type" : "string"
        },
        "urgentTransferAllowed" : {
          "type" : "boolean"
        },
        "productKindName" : {
          "type" : "string"
        },
        "productNumber" : {
          "type" : "string"
        },
        "currentInvestmentValue" : {
          "format" : "double",
          "type" : "number"
        },
        "countryCode" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "productTypeName" : {
          "type" : "string"
        },
        "externalTransferAllowed" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string"
        }
      },
      "required" : [ "id", "routingId", "countryCode" ]
    },
    "CreditCard" : {
      "title" : "CreditCard",
      "type" : "object",
      "properties" : {
        "routingId" : {
          "type" : "string"
        },
        "crossCurrencyAllowed" : {
          "type" : "string"
        },
        "urgentTransferAllowed" : {
          "type" : "boolean"
        },
        "productKindName" : {
          "type" : "string"
        },
        "availableBalance" : {
          "format" : "double",
          "type" : "number"
        },
        "number" : {
          "type" : "string"
        },
        "bookedBalance" : {
          "format" : "double",
          "type" : "number"
        },
        "countryCode" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "productTypeName" : {
          "type" : "string"
        },
        "creditLimit" : {
          "format" : "double",
          "type" : "number"
        },
        "externalTransferAllowed" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string"
        },
        "cardNumber" : {
          "type" : "string"
        }
      },
      "required" : [ "id", "routingId", "countryCode" ]
    },
    "ErrorResponse" : {
      "title" : "ErrorResponse",
      "type" : "object",
      "properties" : {
        "message" : {
          "type" : "string"
        }
      }
    },
    "TermDeposit" : {
      "title" : "TermDeposit",
      "type" : "object",
      "properties" : {
        "routingId" : {
          "type" : "string"
        },
        "crossCurrencyAllowed" : {
          "type" : "string"
        },
        "urgentTransferAllowed" : {
          "type" : "boolean"
        },
        "productKindName" : {
          "type" : "string"
        },
        "accruedInterest" : {
          "type" : "string"
        },
        "productNumber" : {
          "type" : "string"
        },
        "principalAmount" : {
          "format" : "double",
          "type" : "number"
        },
        "countryCode" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "productTypeName" : {
          "type" : "string"
        },
        "externalTransferAllowed" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string"
        }
      },
      "required" : [ "id", "routingId", "countryCode" ]
    },
    "PutAccountsResponse" : {
      "title" : "PutAccountsResponse",
      "type" : "object",
      "properties" : {
        "message" : {
          "type" : "string"
        }
      }
    },
    "InvestmentAccounts" : {
      "title" : "InvestmentAccounts",
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "aggregatedBalance" : {
          "$ref" : "#/definitions/AggregatedBalance"
        },
        "products" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/InvestmentAccount"
          }
        }
      }
    },
    "ProductSummaryResponse" : {
      "title" : "ProductSummaryResponse",
      "type" : "object",
      "properties" : {
        "currentAccounts" : {
          "$ref" : "#/definitions/CurrentAccounts"
        },
        "creditCards" : {
          "$ref" : "#/definitions/CreditCards"
        },
        "debitCards" : {
          "$ref" : "#/definitions/DebitCards"
        },
        "loans" : {
          "$ref" : "#/definitions/Loans"
        },
        "termDeposits" : {
          "$ref" : "#/definitions/TermDeposits"
        },
        "savingsAccounts" : {
          "$ref" : "#/definitions/SavingsAccounts"
        },
        "aggregatedBalance" : {
          "$ref" : "#/definitions/AggregatedBalance"
        },
        "investmentAccounts" : {
          "$ref" : "#/definitions/InvestmentAccounts"
        }
      }
    },
    "TermDeposits" : {
      "title" : "TermDeposits",
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "aggregatedBalance" : {
          "$ref" : "#/definitions/AggregatedBalance"
        },
        "products" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/TermDeposit"
          }
        }
      }
    },
    "SavingsAccount" : {
      "title" : "SavingsAccount",
      "type" : "object",
      "properties" : {
        "routingId" : {
          "type" : "string"
        },
        "IBAN" : {
          "type" : "string"
        },
        "crossCurrencyAllowed" : {
          "type" : "string"
        },
        "urgentTransferAllowed" : {
          "type" : "boolean"
        },
        "productKindName" : {
          "type" : "string"
        },
        "accruedInterest" : {
          "type" : "string"
        },
        "BBAN" : {
          "type" : "string"
        },
        "bookedBalance" : {
          "format" : "double",
          "type" : "number"
        },
        "countryCode" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "productTypeName" : {
          "type" : "string"
        },
        "externalTransferAllowed" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string"
        }
      },
      "required" : [ "id", "routingId", "countryCode" ]
    },
    "Loan" : {
      "title" : "Loan",
      "type" : "object",
      "properties" : {
        "routingId" : {
          "type" : "string"
        },
        "crossCurrencyAllowed" : {
          "type" : "string"
        },
        "urgentTransferAllowed" : {
          "type" : "boolean"
        },
        "productKindName" : {
          "type" : "string"
        },
        "productNumber" : {
          "type" : "string"
        },
        "principalAmount" : {
          "format" : "double",
          "type" : "number"
        },
        "bookedBalance" : {
          "format" : "double",
          "type" : "number"
        },
        "countryCode" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "productTypeName" : {
          "type" : "string"
        },
        "externalTransferAllowed" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string"
        }
      },
      "required" : [ "id", "routingId", "countryCode" ]
    },
    "AggregatedBalance" : {
      "title" : "AggregatedBalance",
      "type" : "object",
      "properties" : {
        "currency" : {
          "type" : "string"
        },
        "value" : {
          "format" : "double",
          "type" : "number"
        }
      }
    },
    "CurrentAccounts" : {
      "title" : "CurrentAccounts",
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "aggregatedBalance" : {
          "$ref" : "#/definitions/AggregatedBalance"
        },
        "products" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/CurrentAccount"
          }
        }
      }
    }
  }
})
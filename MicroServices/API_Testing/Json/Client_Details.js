var Client_Details = function() {
    
    var randomvalues = require('../../Utils/RandomValues_page')
    var clientName = "post new client" + randomvalues.getRandomNumber(5)


 this.clientDetails =  
        {
            "ClientContacts": {
              "clientInternalContacts": {
                "AccountManagerID": "71d98dd7-c2ae-4eb5-80f8-4efabe0613fd",
                "AccountManagerName": "Nicole Henry",
                "Technician3ID": "71d98dd7-c2ae-4eb5-80f8-4efabe0613fd",
                "Technician3Name": "Nicole Henry",
                "Technician1ID": "71d98dd7-c2ae-4eb5-80f8-4efabe0613fd",
                "Technician1Name": "Nicole Henry",
                "ClientId": "34522"
              },
              "clientExternalContacts": []
            },
            "ClientInfo": {
              "isAddressCopy": true,
              "ClientEffDate": "01/01/2015",
              "InsurerID": "1",
              "CountyID": "3",
              "AssociationID": "2",
              "ServiceLocationID": "2",
              "eRaag": true,
              "EAP": true,
              "Payment": true,
              "ClientID": randomvalues.getRandomNumber(5),
              "ClientName": clientName,
            },
            "ClientAddresses": [
              {
                "AddressTypeID": 1,
                "AddressLine1": "SGDFYTTUFTSY",
                "AddressLine2": "JKDSJUIYUISIFI",
                "Phone": randomvalues.getRandomNumber(10),
                "Fax": randomvalues.getRandomNumber(10),
                "City": "AUSTIN",
                "State": "TX",
                "CountryName": "UNITED STATES",
                "ZipCode": "78701"
              },
              {
                "AddressTypeID": 2,
                "AddressLine1": "SGDUFTSY",
                "AddressLine2": "JKDSJSIFI",
                "City": "AUSTIN",
                "State": "TX",
                "CountryName": "UNITED STATES",
                "ZipCode": "78701"
              }
            ]
          }


}

module.exports = new Client_Details;
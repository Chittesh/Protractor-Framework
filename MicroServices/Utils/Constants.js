var Constants = function() { 

    this.QA_base_url = "https://hearwebapp-qa.azurewebsites.net"
    this.Staging_base_url = "https://hearwebapp-staging.azurewebsites.net"
    this.emailaddress = 'hmuralidhara@teksystems.com'
    this.password = 'sunR@ise@5670'

    //clientID 
    this.clientID1 = "10157"
    this.clientID2 = "10041"
    this.clientID3 = "10108"
    this.clientID4 = "10165"
    this.clientID5 = "10173"

    //Zicode 
    this.zipcode1 = "78701"
    this.zipcode2 = "90001"
    
    //Endpoints
    this.SUBSCRIBER_URL = "https://sisc-subscriptionapi-qa.azurewebsites.net/api/v1/subscription/"
    this.PRODUCTS_URL = "https://sisc-productsapi-qa.azurewebsites.net/api/v1/products/"
    this.SUBSCRIBER_SEARCH = "https://sisc-subscriptionapi-qa.azurewebsites.net/api/v1/subscription/search/searchbyssntaxid/"
    this.CLIENT_SEARCH = "https://sisc-productsapi-qa.azurewebsites.net/api/v1/products/clientplans/active/"
    this.ZIPCODE_SEARCH = "https://sisc-subscriptionapi-qa.azurewebsites.net/api/v1/subscription/zipcode/getzipcodeInfo/"
    this.CLIENT_URL = 'https://sisc-clientapi-qa.azurewebsites.net/api/v1/client'
}

module.exports = new Constants;

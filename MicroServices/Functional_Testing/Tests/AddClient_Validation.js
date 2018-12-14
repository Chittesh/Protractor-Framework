
const clientInformation = require('../Pages/ClientInformation_page')
const contactDetails = require('../Pages/ClientContactDetails_page')
const home = require('../Pages/Home_Page')
const randomValues = require('../../Utils/RandomValues_page')
const constants = require('../../Utils/Constants')
const common = require('../Pages/Common')
const clientView = require('../Pages/ClinentView_Page')

describe("shoulda add a new client" , function() {
    browser.ignoreSynchronization = true;
    var clientId , clientName ;
    beforeAll(function() { console.log('Starting'); });
  
  
  
    it("should open the website and login to the page", function() {
        browser.waitForAngularEnabled(false);
        common.qaLogin()      
    })

    it("should create a new client with the valid clientInformation" , function() {
        home.addClient()
        clientInformation.selectYear(110)
        clientInformation.selectMonth(0)
        clientInformation.selectDate(1)
        clientInformation.selectInsurerID(1)
        clientId = clientInformation.enterClientID(randomValues.getRandomNumber(5))
        clientName = clientInformation.enterClientName("add new client" + " " + randomValues.getRandomNumber(5))
        clientInformation.selectCountry(4)
        clientInformation.selectAssociation(2)
        clientInformation.selectCustomerServiceLocation(4)
        clientInformation.enterAddressLine1("ahsdauiyaiiad")
        clientInformation.enterZipcode(constants.zipcode1)
        clientInformation.enterPhoneNumber(randomValues.getNumberInSplitFormat())
        clientInformation.enterFaxNumber(randomValues.getNumberInSplitFormat())
        clientInformation.navigateToClientContacts()
    })


    it("should provide vaild contactDetails" , function() {
        contactDetails.selectAccountManager("NICOLE")
        contactDetails.selectTechnicianI("NICOLE")
        contactDetails.selectTechnicianIII("NICOLE")
        contactDetails.client_contacts()
        contactDetails.submitClient()
   })

   it("should validate whether client is added sucessfully or not" , function() {
       common.verifyUrl()
       clientView.getClientID(clientId)
       clientView.getClientName(clientName)
       
   })
   afterAll(function() { console.log('Ending'); 
});

})
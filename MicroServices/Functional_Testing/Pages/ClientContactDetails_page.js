const ContactDetails_page = function() {

    const common = require('./Common')
    const contactDetails = require('../Repository/ContactDetails_Repository')
  

    this.selectAccountManager = function(name) {
        common.actions(contactDetails.accountManager,name,4000)
    }

    this.selectTechnicianIII = function(name) {
        common.actions(contactDetails.benefitTechnicianIII,name,4000) 
    }

    this.selectTechnicianI = function(name) {
        common.actions(contactDetails.benefitTechnicianI,name,4000) 
        
    }

    this.client_contacts  = function() {
        contactDetails.clientButton.click()
      
    } 

    this.submitClient = function() {
        contactDetails.submitButton.click()
        .then(function() {
            console.log("client added successfully")
        })
        browser.driver.sleep(5000)
       
    }
}

module.exports = new ContactDetails_page;
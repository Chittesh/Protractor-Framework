const ClientInformation_page = function() {
    
   const common = require('../Pages/Common')
   const clientInformation = require('../Repository/ClientInformation_Repository')

    this.selectInsurerID = function(selectInsurer) {
       common.selectByIndex(clientInformation.insurerID,selectInsurer)
     }

     this.calender_box = function() {
        clientInformation.calender.click()
    }

    this.selectYear = function(selectYear) {
        common.selectByIndex(clientInformation.year,selectYear)
        
    }

    this.selectMonth = function(selectMonth){
        common.selectByIndex(clientInformation.month,selectMonth)
     
    }

    this.selectDate = function(selectdate) {
        common.selectByVisibleText(clientInformation.date,selectdate)
    }
   
     this.enterClientID = function(id) {   
        clientInformation.clientID.sendKeys(id)
        return id
   
     }

     this.enterClientName = function(name) {
        clientInformation.clientName.sendKeys(name)
        return name 
     } 

     this.selectCountry = function(selectCountry) {
        common.selectByIndex(clientInformation.country,selectCountry)
        console.log(selectCountry)
        return selectCountry
     }
   

     this.selectAssociation = function(selectassociation) {
         common.selectByIndex(clientInformation.association,selectassociation)
         console.log(selectassociation)
         return selectassociation
     }
   

     this.selectCustomerServiceLocation = function(SelectserviceLocation) {
       common.selectByIndex(clientInformation.customerServiceLocation,SelectserviceLocation)
       console.log(SelectserviceLocation)
       return SelectserviceLocation
     }
   

     this.enterAddressLine1 = function(address) {
        clientInformation.addressLine1.sendKeys(address)
   
     }


    this.enterAddressLine2 = function(address) {
        clientInformation.addressLine2.sendKeys(address)
    


    }

    this.enterZipcode = function(Zipcode) {
        clientInformation.zipcode.sendKeys(Zipcode)
        clientInformation.city.click()
        browser.driver.sleep(2000)
        clientInformation.state.click()
        browser.driver.sleep(2000)
    

    }
    
    this.enterPhoneNumber = function(phone) {
        clientInformation.phoneNumber.sendKeys(phone)
      

    }

    this.enterFaxNumber = function(fax) {
        clientInformation.faxNumber.sendKeys(fax)
      
    }

    this.navigateToClientContacts = function() {
        clientInformation.addClientContactsButton.click()
        browser.driver.sleep(3000)
    }
}

module.exports = new ClientInformation_page;
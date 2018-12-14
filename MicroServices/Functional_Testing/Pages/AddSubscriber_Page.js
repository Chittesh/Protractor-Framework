const AddSubscriber_page =function() {   
    
    const common = require('../Pages/Common')
    const addSubscriber = require('../Repository/AddSubscriber_Repository')
   
    this.enterSSN = function(value) {
       addSubscriber.ssn.sendKeys(value)
       browser.driver.sleep(3000)
       return value 
    }
    
    this.enterClientId = function(value) {
        common.actions(addSubscriber.clientID,value,3000)
    }

    this.enterLastName = function(value) {
        addSubscriber.lastName.sendKeys(value)
        
    }

    this.subscriberLastName = function() {
      const subscriberLN = common.getText(addSubscriber.lastName)
      return subscriberLN.toString()

    }

    this.enterFirstName = function(value) {
        addSubscriber.firstName.sendKeys(value)
        return value
    }

    this.enterMiddleInitial = function(value) {
        addSubscriber.middleName.sendKeys(value)
    }

    this.calender_box = function() {
        addSubscriber.calender.click()
    }

    this.selectYear = function(selectYear) {
        common.selectByIndex(addSubscriber.year,selectYear)
     }

    this.selectMonth = function(selectMonth){
        common.selectByIndex(addSubscriber.month,selectMonth)
    }

    this.selectDate = function(selectdate) {
       common.selectByVisibleText(addSubscriber.date,selectdate)
    }
  
   this.selectGenderFemale = function() {
       addSubscriber.genderFemale.click()
  
    }

    this.selectGenderMale = function() {
       addSubscriber.genderMale.click()
    }

    this.enterAddressLine1 = function(value) {
       addSubscriber.addressLine1.sendKeys(value)

    }

    this.enterAddressLine2 = function(value) {
       addSubscriber.addressLine2.sendKeys(value)

    }

    this.enterZipCode = function(value) {
       addSubscriber.zipCode.sendKeys(value)
       addSubscriber.city.click()
       addSubscriber.state.click()

    }

    this.enterMobileNumber = function(value) {
        addSubscriber.mobileNumber.sendKeys(value)
        browser.driver.sleep(3000)
    
    }

    this.enterHomeNumber = function(value) {
       addSubscriber.homeNumber.sendKeys(value)
       browser.driver.sleep(2000)

    }

    this.enterWorkNumber = function(value) {
        addSubscriber.workNumber.sendKeys(value)
        browser.driver.sleep(2000)
    }

    this.enterEmailID = function(value) {
        addSubscriber.email.sendKeys(value)
    }

    this.validateCOB = function() {
       addSubscriber.cobCheckbox.click();
       addSubscriber.benifitStartDate.click();
       addSubscriber.benifitEndDate.click();
       addSubscriber.venderCode.click();
       addSubscriber.venderSubscriberCode.click();
       addSubscriber.planDetails.click();
    }

   
    this.validateMedicare = function() {
       addSubscriber.medicareCheckbox.click();
       addSubscriber.medicarePartADate.click();
       addSubscriber.medicarePartBDate.click();
       addSubscriber.medicarePlan.click();
       addSubscriber.medicareOverrideDate.click();    
    }

    this.addDependent = function() {
        addSubscriber.nextButton.click()
        browser.driver.sleep(2000)
    }

    this.clickOnGoToProduct = function() {
        addSubscriber.addProductLink.click();
       
    }
}

module.exports = new AddSubscriber_page;
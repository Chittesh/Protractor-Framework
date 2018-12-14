var AddDependent_page = function() {
   const common = require('../Pages/Common')
   const addDependent = require('../Repository/AddDependent_Repository')
   
    this.selectRelationshipOfDependent = function(selectDependent) {
        common.selectByVisibleText(addDependent.relationshipDDL,selectDependent)
        browser.driver.sleep(3000)
    }

    this.enterDependentSSN = function(value) {
        addDependent.ssn.sendKeys(value)
    }

    this.entreLastName = function(value) {
        addDependent.lastName.sendKeys(value)
    }

    this.enterFirstName = function(value) {
        addDependent.firstName.sendKeys(value)
    }

    this.enterMiddleInitial = function(value) {
        addDependent.middleName.sendKeys(value)
    }

    this.calender_box = function() {
        addDependent.calender.click()
    }

    this.selectYear = function(selectYear) {
        common.selectByIndex(addDependent.year,selectYear)
        
    }

    this.selectMonth = function(selectMonth){
        common.selectByIndex(addDependent.month,selectMonth)
     
    }

    this.selectDate = function(selectdate) {
        common.selectByVisibleText(addDependent.date,selectdate)
       
    }

    this.selectGenderFemale = function() {
        addDependent.genderFemale.click()
    }

    this.selectGenderMale = function() {
        addDependent.genderMale.click() 
    }

    this.validateCOB = function() {
        addDependent.COBcheckbox.click();
        addDependent.benifitStartDate.click();
        addDependent.benifitEndDate.click();
        addDependent.venderCode.click();
        addDependent.venderSubscriberCode.click();
        addDependent.planDetails.click();
    }

    this.validateMedicare = function() {
        addDependent.medicareCheckbox.click();
        addDependent.medicarePartADate.click();
        addDependent.medicarePartBDate.click();
        addDependent.medicarePlan.click();
        addDependent.medicareOverrideDate.click();
    }

    this.validateDependentAddressAndContact = function() {
        addDependent.subscriberAddress.click()
        addDependent.subscriberContact.click() 
    }

    this.AddProduct = function() {
       addDependent.nextButton.click()
      
    }
}

module.exports = new AddDependent_page;


const AddProduct_page = function() {
    const common = require('../Pages/Common')
    const addProduct = require('../Repository/AddProduct_Repository')
  
    this.checkEnrollementType = function() {
       addProduct.enrollementType.click()
    }

    this.checkBargainingUnit = function() {
        addProduct.bargainingUnit.click()
    }

    this.calender_box = function() {
       addProduct.calender.click()
    }

    this.selectYear = function(selectYear) {
        common.selectByIndex(addProduct.year,selectYear)
     
    }

    this.selectMonth = function(selectMonth){
        common.selectByIndex(addProduct.month,selectMonth)
    }

    this.selectDate = function(selectdate) {
        common.selectByVisibleText(addProduct.date,selectdate)
    }

    this.selectMedicalPlans = function(medicalPlan) {
        common.selectByIndex(addProduct.selectMedicalPlan,medicalPlan)
       
    }   
     
    this.selectDentalPlans = function(dentalPlan) {
        common.selectByIndex(addProduct.selectDentalPlan,dentalPlan)
    }

    this.selectVisionPlans = function(visionPlan) {
        common.selectByIndex(addProduct.selectVisionPlan,visionPlan)
    
    }

    this.selectLifePlans = function(lifePlan) {
        common.selectByIndex(addProduct.selectLifePlan,lifePlan,3000)
        
    }

    this.enrollForVoluntaryPlan = function() {
        addProduct.enrollVoluntaryPlan.click()
      
    }

    this.enterCoverageAmount = function(amount) {
        addProduct.coverageAmount.sendKeys(amount)
        addProduct.coverageAmount.sendKeys(protractor.Key.TAB);
        browser.driver.sleep(2000)
    }
    
    this.erollChildForVoluntary = function() {
        addProduct.enrollChild.click()
        browser.driver.sleep(3000)
    }

    this.submitSubsccriber = function() {
        addProduct.submitButton.click().then(function(){
            console.log("subscriber added successfully")
        })
        browser.driver.sleep(10000)
    } 
}

module.exports = new AddProduct_page;
const RecordPayments_page = function() {

  const common = require('../Pages/Common')
  const recordPayment = require('../Repository/RecordPayment_Repository')
   

    this.selectFileCategory_JE = function() {
        recordPayment.fileCategoryJE.click()    
    }

    this.selectFileCategory_TF = function() {
        recordPayment.fileCategoryTF.click()
    }

    this.enterReferenceNumber = function(number) {
        recordPayment.referenceNumber.sendKeys(number)
    }

    this.calender = function() {
        recordPayment.calender.click()
    }  

    this.selectYear = function(selectYear) {
       common.selectByIndex(recordPayment.year,selectYear)    
    }

    this.selectMonth = function(selectMonth){
       common.selectByIndex(recordPayment.month,selectMonth)       
    }

    this.selectDate = function(selectdate) {
       common.selectByVisibleText(recordPayment.date,selectdate)
    }

    this.selectInsusrerProduct = function(id) {
       common.selectByIndex(recordPayment.insurerProductID,id)
    }

    this.selectBill = function(bill) {
        common.selectByIndex(recordPayment.directBill,bill)
    } 

    this.enterClientId = function(value) {
        common.actions(recordPayment.clientName,value,3000)  
    }

    this.GLAccount = function() {
        recordPayment.glAccount.click()
    }
    this.enterCheckNumber = function(number) {
        recordPayment.checkNumber.sendKeys(number)
    }

    this.enterCheckAmount = function(amount) {
        recordPayment.checkAmount.sendKeys(amount)
        common.getAttribute(recordPayment.checkAmount,"ng-reflect-model")
      
    }

    this.enterDescription = function(destion) {
        recordPayment.description.sendKeys(destion)
    }

    this.clickAddButton = function() {
        recordPayment.addButton.click()
        browser.driver.sleep(3000)
    }
    this.clickSubmitButton = function() {
        recordPayment.submitButton.click()
        browser.driver.sleep(5000)
    }
    this.clickApproveButton = function() {
        recordPayment.approveButton.click()
    }

    this.clickResetButton = function() {
        recordPayment.resetButton.click()
    }

    this.checkDate = function() {
        recordPayment.checkDate.click()
    }

    this.getClientBalance = function(balanceAmount) {
        browser.driver.sleep(3000)
        common.verifyText(recordPayment.clientBalance,balanceAmount)
     

    }
}

module.exports = new RecordPayments_page;
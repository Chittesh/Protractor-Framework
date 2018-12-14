const RecordAdjustment_page = function() {

    const common = require('../Pages/Common')
    const recordAdjustment = require('../Repository/RecordAdjustment_Repository')

    this.selectInsurerProductID = function(id) {
       common.selectByIndex(recordAdjustment.insurerProductID,id)
    }

    this.calender = function() {
        recordAdjustment.calender.click()
    }  

    this.selectYear = function(selectYear) {
       common.selectByIndex(recordAdjustment.year,selectYear)    
    }

    this.selectMonth = function(selectMonth){
       common.selectByIndex(recordAdjustment.month,selectMonth)       
    }

    this.selectDate = function(selectdate) {
       common.selectByVisibleText(recordAdjustment.date,selectdate)
    }

    this.enterClientId = function(value) {
        common.actions(recordAdjustment.clientId,value,3000)
    
    }

    this.selectDirectBill = function(bill) {
        common.selectByIndex(recordAdjustment.directBill,bill)
    }

    this.enterAdjustementAmount = function(amount) {
        recordAdjustment.adjustmentAmount.sendKeys(amount)
    }

    this.enterDescription = function(des) {
        recordAdjustment.description.sendKeys(des)
    }

    this.selectProductCode = function(code) {
     common.selectByIndex(recordAdjustment.productCode,code)
    }
    
    this.selectGroup = function(grp) {
      common.selectByIndex(recordAdjustment.group,grp)
    }

    this.selectDeprtment = function(dept) {
      common.selectByIndex(recordAdjustment.department,dept)
    }
     
    this.clickAddButton = function() {
        recordAdjustment.addButton.click()
        browser.driver.sleep(5000)
    }

    this.clickSubmitButton = function() {
        recordAdjustment.submitButton.click()
        browser.driver.sleep(5000)
    }
    this.clickApproveButton = function() {
        recordAdjustment.approveButton.click()
        browser.driver.sleep(5000)
    }
}

module.exports = new RecordAdjustment_page;
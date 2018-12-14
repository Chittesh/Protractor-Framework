var ViewPayments_page = function() {

const viewPayments = require('../Repository/ViewPayments_Repository')
const common = require('../Pages/Common')

    
    this.viewButton = function(viewDetails) {
       common.selectByIndex(viewPayments.viewButton,viewDetails,3000)
    }

    this.viewPaymentPage = function() {
        viewPayments.viewPayment.click()
    }

    this.searchByCheckNumber = function(checkNumber) {
        viewPayments.searchCheckNumber.sendKeys(checkNumber)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.driver.sleep(3000)
    }

    this.addFilter = function() {
        browser.driver.sleep(3000)
        viewPayments.filter.click()
        browser.driver.sleep(3000)
    }
    this.enterClientID = function(id) {
        common.actions(viewPayments.clientId,id,3000)
    }
    this.selectInsurerId = function(insurer) {
        common.selectByIndex(viewPayments.insurerId,insurer)
    }
    this.depositFromDate = function(year,month,date) {
        common.calenderBox()
        common.selectYear(year)
        common.selectMonth(month)
        common.selectDate(date)
    }
    this.depositToDate = function(year,month,date) {
        browser.driver.sleep(3000)
        common.calenderBox(1)
        common.selectYear(year)
        common.selectMonth(month)
        common.selectDate(date)
    }
    this.selectCheckAmountrange = function(range) {
        common.selectByIndex(viewPayments.checkAmountRange,range)
    }
    this.enterCheckAmount = function(amount) {
        viewPayments.checkAmount.sendKeys(amount)
    }
    this.applyFilters = function() {
        viewPayments.applyButton.click()
        browser.driver.sleep(3000)
    }
    this.cancelFilters = function() {
        viewPayments.cancelButton.click()
        browser.driver.sleep(3000)
    }
    this.backToViewPaymentsScreen = function() {
        viewPayments.backButton.click()
        browser.driver.sleep(3000)
    }


    this.getClientName = function() {
       common.getText( viewPayments.clientName)
    }

}

module.exports = new ViewPayments_page;
const SubscriberView_page = function() {

  const common = require('../Pages/Common')
  const home = require('../Pages/Home_Page')
  const subscriberView = require('../Repository/SubscriberView_Repository')

    this.viewPersonalDetails = function() {
      subscriberView.personal_details.click()
       
    }
    this.getSubscriberName = function(expectedText) {
      common.verifyText(subscriberView.subscriberName,expectedText)
     
    }
    this.getSubscriberSsn = function(expectedText) {
      common.verifyText(subscriberView.subscriberSsn,expectedText)
    }
    this.searchSubscriber = function(subsciber) {
      home.searchTextbox(subsciber)
    }
    this.tabOnPersonalDetails = function() {
      subscriberView.personalDetailsTab.click()
    }
    this.tabOnProductDetails = function() {
      subscriberView.productsDetailsTab.click()
    }

    this.tabOnHistory = function() {
      browser.driver.sleep(3000)
      subscriberView.historyTab.click()
    }
    this.tabOnBilling = function() {
      subscriberView.billingTab.click()
    }

    this.getHistory = function() {
      subscriberView.getHistoryButton.click()
    }
    this.getBilling = function() {
      subscriberView.getBillingButton.click()
    }
    this.updateSubscriber = function() {
      subscriberView.updateButton.click()
    }

    this.terminateAllPlans = function() {
      subscriberView.terminateAllButton.click()
    }

    this.editEffectiveDateOfAllPlans = function() {
      browser.driver.sleep(3000)
      subscriberView.editAllButton.click()
    }
    this.addMoreDependents = function() {
      subscriberView.addMoreDependents.click()
    }
    this.tabOnNotes = function() {
      subscriberView.notesTab.click()
    }
    this.writeNote = function(notes) {
      subscriberView.notesTextarea.sendKeys(notes) 
    }
    this.clickOnAddButton = function() {
      subscriberView.addButton.click()
    }
    this.indicatorOfNotes = function() {
      common.getAttribute(subscriberView.notesIndicator,"class")
    
    }
}
module.exports = new SubscriberView_page;
const HomePage = function() {

   const common = require('../Pages/Common')
   const home = require('../Repository/Home_Repository')

    this.searchTextbox = function(values) {      
        common.actions(home.search,values,4000)
    }

    this.addSubscriber = function() {
        home.addSubscriber.click()
        browser.driver.sleep(3000)
    }

    this.addClient = function() {
        home.addClient.click()
        browser.driver.sleep(4000)   
    }

    this.addViewPayment = function() {
        home.addViewPpayment.click()   
        browser.driver.sleep(5000)   
    }

    this.otherAdjustement = function() {
        home.otherAdjustement.click()
        browser.driver.sleep(3000)     
    }

    this.uploadSheets = function() {
        home.uploadSheets.click()   
    }

    this.account = function() {
        home.account.click()      
    }

    this.logout = function() {
        home.logout.click()      
    }

    this.hear_2 = function() {
        home.hear2.click()
        browser.driver.sleep(5000)      
    }
}

module.exports = new HomePage;
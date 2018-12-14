var Login_page = function() {

   const login = require('../Repository/Login_Repository')
   const loginCradentials = require("../../utils/Constants")
   const common = require("./Common")
   
    this.enterEmailAddress = function(values) {
        login.emailAddress.sendKeys(values)
    }

    this.enterPassword = function(values) {
        login.password.sendKeys(values)
    }

    this.clickNextButton = function() {
        login.nextButton.click()
    }

    this.handleSignIN = function() {
        try {
            login.yes.click()
        } catch (error) {
            return error;            
        }
    }

    this.login_details = function() {
        login.emailAddress.sendKeys(loginCradentials.emailaddress)
        login.nextButton.click()
        login.password.sendKeys(loginCradentials.password)
        browser.driver.sleep(3000)
        login.nextButton.click()
        try {
            login.yes.click()
        } catch (error) {
            return error            
        }
        
    }
}

module.exports = new Login_page;
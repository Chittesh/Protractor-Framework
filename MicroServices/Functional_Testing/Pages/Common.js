const Common = function() {

    const loginCradentials = require('../../Utils/Constants')
    const login = require('../Pages/Login_Page')
    const calender = element.all(by.xpath("//div[@class='calender-box']/input"))
    const year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    const month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    const date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
   

    //QA login
      this.qaLogin = function() {
        browser.waitForAngularEnabled(false);
        browser.get(loginCradentials.QA_base_url)
        browser.driver.manage().window().maximize()
        login.login_details()
      }

    //selectByIndex 
    this.selectByIndex = function(element,index,milliseconds) {
        element.then(function(options){
            options[index].click()
        })
        if(typeof milliseconds !== 'undefined') {
            browser.sleep(milliseconds)
        }
    }

    //selectByVisibleText 
    this.selectByVisibleText = function(element,visibleText,milliseconds) {
        element.each(function(item){
            item.getAttribute('text').then(function(text){
                if (text == visibleText ) {
                    item.click()
                }
            })        
        })  
        if(typeof milliseconds !== 'undefined') {
            browser.sleep(milliseconds)
        }    
    }

    //actionMethod
    this.actions = function(element,text,milliseconds){
     element.sendKeys(text)
     browser.driver.sleep(milliseconds)
     browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
     browser.driver.sleep(milliseconds)
     browser.actions().sendKeys(protractor.Key.ENTER).perform()
   }

   //verifying text
   this.verifyText = function(element,expectedText) { 
    element.getText().then(function(text) {
        expect(element.getText()).toContain(expectedText)
        console.log(text)
        return text
    })
   }

  //getAttribute
  this.getAttribute = function(element,attribute) {
      element.getAttribute(attribute).then(function(attribute){
          console.log(attribute)
          return attribute
      })
  }

  //getTitle of the page 
  this.getTitle = function() {
      browser.getTitle().then(function(title){
          console.log(title)
      })
          
  }

  //MouseHover action
  this.mouseHover = function(element,text) {
      if(element.sendKeys()) {
        browser.actions().mouseMove(element.sendKeys(text)).perform()
      }
      if(element.click()) {
          browser.actions().mouseMove(element.click()).perform()
      }
  }

  //window handle 
  this.windowHandle = function(element,handle) {
      element.click().then(function(){
          browser.getAllWindowHandles().then(function(handles) {
              browser.switchTo().window(hadles[handle])
              browser.getTitle()
              
          })
      })
  }

  //get url of the page
  this.verifyUrl = function() {
    browser.getCurrentUrl().then(function(url){
        console.log(url)
        expect(browser.getCurrentUrl()).toMatch(url)
        return url
    })
  }
  
  this.getText = function(element) {
      element.getText().then(function(text) {
          console.log(text)
          return text
      })
  }
  //selct calender box
  this.calenderBox = function(index) {
    calender.click()
  }

  //select year
  this.selectYear = function(selectYear) {
    this.selectByIndex(year,selectYear)
  }

  //select month
  this.selectMonth = function(selectMonth){
    this.selectByIndex(month,selectMonth)
  }

  //select date
  this.selectDate = function(selectdate) {
   this.selectByVisibleText(date,selectdate)
  }
 
}

module.exports = new Common; 
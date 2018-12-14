const viewPayments = require('../Pages/ViewPayments_page')
const common = require('../Pages/Common')
const home = require('../Pages/Home_Page')

describe ("validating the view payments screen of creat/view paymnets module", function() {

    it("should login to the website and open view payments screen" , function() {
        browser.waitForAngularEnabled(false);
        common.qaLogin() 
        home.addViewPayment()
        viewPayments.viewPaymentPage()
        
    })
   // it("should navigate to the search by check number bar search the paymnet by checknumber" , function() {
       // browser.driver.sleep(3000)
      //  viewPayments.viewThePayment()
       // viewPayments.getClientName()
       // viewPayments.searchByCheckNumber('3121155677')
       // viewPayments.viewButton(0)
       // viewPayments.backToViewPaymentsScreen()

  //  })
   it("should add filters for the better search", function() {
        viewPayments.addFilter()
        viewPayments.enterClientID('10157')
        viewPayments.selectInsurerId(5)
        viewPayments.depositFromDate(3,9,1)
        viewPayments.depositToDate(3,9,20)
        viewPayments.selectCheckAmountrange(0)
        viewPayments.enterCheckAmount(1000000)
        viewPayments.applyFilters()
    })

})
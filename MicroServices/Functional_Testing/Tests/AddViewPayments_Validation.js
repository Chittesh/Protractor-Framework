const recordDetails = require('../Pages/RecordPayment_page')
const viewPayments = require('../Pages/ViewPayments_page')
const home = require('../Pages/Home_Page')
const randomValues = require('../../Utils/RandomValues_page')
const constants = require('../../Utils/Constants')
const common = require('../Pages/Common')

describe("should record new payment and view the payments" ,function() {

    beforeAll(function() { console.log('Starting'); });
   // beforeEach(function() { console.log('spec.beforeEach'); });

    it("login to the page and click on the create/view payments module", function(){
        browser.waitForAngularEnabled(false);
        common.qaLogin()       
    })

    it("should record new payment" , function() {
        home.addViewPayment()
        recordDetails.enterReferenceNumber(randomValues.getRandomNumber(10))
        recordDetails.calender()
        recordDetails.selectYear(1)
        recordDetails.selectMonth(1)
        recordDetails.selectDate(21)
        recordDetails.enterClientId(constants.clientID1)
        recordDetails.checkDate()
        recordDetails.selectYear(1)
        recordDetails.selectMonth(1)
        recordDetails.selectDate(21)
        recordDetails.enterCheckNumber(randomValues.getRandomNumber(10))
        recordDetails.enterCheckAmount(randomValues.getRandomNumber(10))
        recordDetails.clickAddButton()
        recordDetails.clickApproveButton()
        recordDetails.clickSubmitButton()
        viewPayments.viewButton(0)
   
    
    })

    //afterEach(function() { console.log('spec.afterEach'); });
    afterAll(function() { console.log('Ending'); });
}) 
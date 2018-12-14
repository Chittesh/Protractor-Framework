
const recordAdjustment = require('../Pages/recordAdjustment_pages')
const home = require('../Pages/Home_Page')
const constants = require('../../Utils/Constants')
const common = require('../Pages/Common')

describe("validating other adjustment page" , function( ){
    
    beforeAll(function() { console.log('Starting'); });
   // beforeEach(function() { console.log('spec.beforeEach'); });

    it("should login to the website and open the other adjustment page" , function() {
        browser.waitForAngularEnabled(false);
        common.qaLogin()
        home.otherAdjustement()
    })

    it("should record the adjustment" , function() {
        recordAdjustment.enterClientId(constants.clientID1)
        recordAdjustment.calender()
        recordAdjustment.selectYear(1)
        recordAdjustment.selectMonth(5)
        recordAdjustment.selectDate(1)
        recordAdjustment.enterAdjustementAmount("1000000")
        recordAdjustment.enterDescription("uiayhsiud")
        recordAdjustment.selectProductCode(3)
        recordAdjustment.selectGroup(4)
        recordAdjustment.selectDeprtment(1)
        recordAdjustment.clickAddButton()
        recordAdjustment.clickSubmitButton()
    })

    //afterEach(function() { console.log('spec.afterEach'); });
    afterAll(function() { console.log('Ending'); });
})
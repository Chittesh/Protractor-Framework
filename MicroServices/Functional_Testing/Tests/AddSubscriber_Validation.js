const subscriberDetails = require('../Pages/AddSubscriber_Page')
const dependentDetails = require('../Pages/AddDependent_page')
const productDetails = require('../Pages/AddProduct_Page')
const subscriberView = require('../Pages/SubscriberView_page')
const home = require('../Pages/Home_Page')
const randomValues = require('../../Utils/RandomValues_page')
const constants = require('../../Utils/Constants')
const common = require('../Pages/Common')



describe('validating addSubscriber module:add the subscriber with a dependent', function(){
    browser.ignoreSynchronization = true;
    var subscriberSsn;
    beforeAll(function() { console.log('Starting'); });
  
    it("should open the website and login to the page", function() {
        browser.waitForAngularEnabled(false);
        common.qaLogin()
    
    })

    it("should click on the add subscriber module and enter vaild cradentials", function() {
        home.addSubscriber()
        subscriberSsn = subscriberDetails.enterSSN(randomValues.getSSNNumberInSplitFormat())
        subscriberDetails.enterClientId(constants.clientID1,0)
        subscriberDetails.enterLastName("UNIQUE")
        subscriberDetails.enterFirstName("SUBSCRIBER")
        subscriberDetails.enterMiddleInitial("W")
        subscriberDetails.calender_box()
        subscriberDetails.selectYear(100)
        subscriberDetails.selectMonth(5)
        subscriberDetails.selectDate(11)
        subscriberDetails.selectGenderFemale()
        subscriberDetails.enterAddressLine1("bangalore kalyan nagar")
        subscriberDetails.enterZipCode(constants.zipcode1)
        subscriberDetails.addDependent()        
    })

    it("should add depenedent details" ,function() {
        dependentDetails.selectRelationshipOfDependent("SPOUSE")
        dependentDetails.enterFirstName("DEPENDENT")
        dependentDetails.enterMiddleInitial("M")
        dependentDetails.calender_box()
        dependentDetails.selectYear(100)
        dependentDetails.selectMonth(0)
        dependentDetails.selectDate(21);
        dependentDetails.selectGenderMale()
        dependentDetails.AddProduct()

    })

    it("should add products", function() {
        productDetails.calender_box()
        productDetails.selectYear(0)
        productDetails.selectMonth(7)
        productDetails.selectDate(12)
        productDetails.selectMedicalPlans(0)
        productDetails.selectDentalPlans(0)
        productDetails.selectVisionPlans(0)
        productDetails.selectLifePlans(0)
        productDetails.enrollForVoluntaryPlan()
        productDetails.enterCoverageAmount(2000000)
        productDetails.submitSubsccriber()

    })

    it("should validate the subscriebr is added successfull" , function() {
        common.verifyUrl()
        subscriberView.getSubscriberSsn(subscriberSsn)
        subscriberView.getSubscriberName("UNIQUE")
    
    })

    //afterEach(function() { console.log('spec.afterEach'); });
    afterAll(function() { console.log('Ending'); 
    });

})
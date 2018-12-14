const subscriberView = require('../Pages/SubscriberView_page')
const common = require('../Pages/Common')

describe("shoulda add a new client" , function() {
   
    beforeAll(function() { console.log('Starting'); });
   // beforeEach(function() { console.log('spec.beforeEach'); });


    it("should open the website and login to the page", function() {
        browser.waitForAngularEnabled(false);
        common.qaLogin()
    })

    it("should search an subscriber and edit the effective date of plans", function(){
        subscriberView.searchSubscriber("unique subscriber")
        subscriberView.tabOnPersonalDetails()
        subscriberView.tabOnNotes()
        subscriberView.writeNote("hdsuihfsuihdfuisui")
        subscriberView.clickOnAddButton()
        subscriberView.indicatorOfNotes()
        subscriberView.tabOnHistory()

        
        

    })
})
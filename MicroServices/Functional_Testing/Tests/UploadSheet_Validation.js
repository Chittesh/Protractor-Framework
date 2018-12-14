
const common = require('../Pages/Common')
const uploadSheet = require('../Pages/UploadSheet_Page')

describe("should upload O-Rate sheet " ,function() {

    beforeAll(function() { console.log('Starting'); });
   // beforeEach(function() { console.log('spec.beforeEach'); });

    it("login to the page and click on the create/view payments module", function(){
        browser.waitForAngularEnabled(false);
        common.QA_login()       
    })

    it("should upload O-Rate sheet successfully" , function() {
        uploadSheet.clickOnBrowseFile()
        uploadSheet.clickOnUploadButton()
    })

    //afterEach(function() { console.log('spec.afterEach'); });
    afterAll(function() { console.log('Ending'); });

})
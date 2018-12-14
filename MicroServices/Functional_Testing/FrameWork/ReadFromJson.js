
const loginCradentials = require('../../Utils/Constants')
const readFromGetKeyWordBaseOnValues = require('../FrameWork/ReadingFromJson/keywordDriven/getKeywordBasedOnValues')
const getTestCase = require('../FrameWork/ReadingFromJson/keywordDriven/TestCase')

const testcaseFromSuite = require("../FrameWork/ReadingFromJson/Suite/getSuite")

describe("Should Add A New Client" , function() {

 function run(testcaseName){
    var referenceName = getTestCase.getNameFiled(testcaseName)
     for(var i = 0 ; i<referenceName.length; i++){
            readFromGetKeyWordBaseOnValues.getKeyword(i,testcaseName)
         
        
    }
    
 }



it("Should Open The Website", function() {      
        browser.waitForAngularEnabled(false);
        browser.get(loginCradentials.QA_base_url);
        browser.driver.manage().window().maximize(); 
            
})

it("Should Login To The Page and perform Add client functionality", function() {
    for(var i=0;i<testcaseFromSuite.getSuite().length;i++){
        run(testcaseFromSuite.getSuite());
    }
          
})

  
})
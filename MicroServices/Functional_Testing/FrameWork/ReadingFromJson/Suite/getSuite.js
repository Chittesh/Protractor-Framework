var getTestCases = function () {

    this.getSuite = function () {
        const suiteArray = require("../Suite/suite.js")

        var TestCaseNameArray = suiteArray[0]
        var TestCaseRunArray = suiteArray[1]


        while (TestCaseRunArray.indexOf("No") != -1) {
            let index = TestCaseRunArray.indexOf("No");
            //Removes 1 object from that index
            TestCaseNameArray.splice(index, 1)
            TestCaseRunArray.splice(index, 1)

        }

        return TestCaseNameArray

    }
}


module.exports = new getTestCases()
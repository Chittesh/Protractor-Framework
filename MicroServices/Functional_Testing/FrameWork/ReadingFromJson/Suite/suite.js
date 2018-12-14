var suite = function () {

    //Including properties
    const properties = require('../Properties')
    const fs = require('fs');
    // Read the file into raw data
    const path = require("path");
    const rawdata = fs.readFileSync(path.resolve(__dirname, "../Suite/Suite.json"));
    // Parse the raw data into meaningful JSON format
    let contents = JSON.parse(rawdata);
    //Locator array 
    var TestCases = contents['TestCases']

    //Iterating for each element from the Locator.json
    for (var i = 0; i < contents['TestCases'].length; i++) {
        var TestCase = TestCases[i]
        properties.SuiteTestCaseName.push(TestCase['TestCaseName'])
        properties.SuiteRun.push(TestCase['Run'])

    }

    return [properties.SuiteTestCaseName, properties.SuiteRun]
}

module.exports = new suite()
var getTestCase = function () {

    this.getNameFiled = function (fileName) {
        const properties = require('../Properties')
        const fs = require('fs');
        // read the file into raw data
        const path = require("path");
        var pathOfFile = "../TestCases/" + fileName + ".json"
        const rawdata = fs.readFileSync(path.resolve(__dirname, pathOfFile));
        // parse the raw data into meaningful JSON format
        let contents = JSON.parse(rawdata);
        var Keyword = contents['Keyword']
        for (var i = 0; i < Keyword.length; i++) {
            var Keywords = Keyword[i]
            properties.TestCase.push(Keywords['ObjectReference'])
        }
        return properties.TestCase
    }

}


module.exports = new getTestCase


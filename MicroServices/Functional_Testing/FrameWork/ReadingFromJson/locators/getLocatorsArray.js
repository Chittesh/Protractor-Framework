var getLocation = function () {

    this.getLocationArray = function (locatorName) {
        const locatorArray = require('./locators.js')

        var locatorNameArray = locatorArray[0]
        var XPATHArray = locatorArray[1]
        var IDArray = locatorArray[2]
        var NAMEArray = locatorArray[3]
        var CLASSNAMEArray = locatorArray[4]
        var CSSArray = locatorArray[5]
        var BINDINGArray = locatorArray[6]
        var MODELArray = locatorArray[7]
        var TAGNAMEArray = locatorArray[8]
        //Getting index from the passed parameter
        var index = locatorNameArray.indexOf(locatorName)

        return [locatorName, XPATHArray[index], IDArray[index], NAMEArray[index], CLASSNAMEArray[index],
            CSSArray[index], BINDINGArray[index], MODELArray[index], TAGNAMEArray[index]]
    }


}

module.exports = new getLocation()

var getLocationBasedOnValue = function () {
    var elementObject = ""
    var elementObjects = ""
    this.getLocator = function (locatorName) {

        const getLocation = require('../locators/getLocatorsArray')

        var locationArray = getLocation.getLocationArray(locatorName)

        for (var i = 1; i < locationArray.length; i++) {
            var Value = locationArray[i]

            let EC = ExpectedConditions;
            const wait = 60000

            if (i == 1 && (Value.length) != 0) {
                let condition = EC.elementToBeClickable(element(by.xpath(Value.toString())))
                browser.wait(condition, wait)
                elementObjects = element.all(by.xpath(Value.toString()))
                //elementObject=element(by.xpath(Value.toString()))
            } else if (i == 2 && (Value.length) != 0) {
                let condition = EC.elementToBeClickable(element(by.id(Value.toString())))
                browser.wait(condition, wait)
                elementObjects = element.all(by.id(Value.toString()))
                // elementObject=element(by.id(Value.toString()))
            } else if (i == 3 && (Value.length) != 0) {
                let condition = EC.elementToBeClickable(element(by.name(Value.toString())))
                browser.wait(condition, wait)
                elementObjects = element.all(by.name(Value.toString()))
                // elementObject=element(by.name(Value.toString()))
            } else if (i == 4 && (Value.length) != 0) {
                let condition = EC.elementToBeClickable(element(by.className(Value.toString())))
                browser.wait(condition, wait)
                elementObjects = element.all(by.className(Value.toString()))
                // elementObject=element(by.className(Value.toString()))
            } else if (i == 5 && (Value.length) != 0) {
                let condition = EC.elementToBeClickable(element(by.css(Value.toString())))
                browser.wait(condition, wait)
                elementObjects = element.all(by.css(Value.toString()))
                // elementObject=element(by.css(Value.toString()))
            } else if (i == 6 && (Value.length) != 0) {
                let condition = EC.elementToBeClickable(element(by.binding(Value.toString())))
                browser.wait(condition, wait)
                elementObjects = element.all(by.binding(Value.toString()))
                //elementObject=element(by.binding(Value.toString()))
            } else if (i == 7 && (Value.length) != 0) {
                let condition = EC.elementToBeClickable(element(by.model(Value.toString())))
                browser.wait(condition, wait)
                elementObjects = element.all(by.model(Value.toString()))
                //elementObject=element(by.model(Value.toString()))
            } else if (i == 8 && (Value.length) != 0) {
                let condition = EC.elementToBeClickable(element(by.tagName(Value.toString())))
                browser.wait(condition, wait)
                elementObjects = element.all(by.tagName(Value.toString()))
                //elementObject=element(by.tagName(Value.toString()))
            }

        }
        //if(elementObjects.length>1){
        return elementObjects
        //}else{
        // return elementObject
        //}

    }
}

module.exports = new getLocationBasedOnValue()










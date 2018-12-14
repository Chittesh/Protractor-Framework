
var getKeywordBasedOnValues = function () {
    var randomValues = require("../../../../Utils/RandomValues_page")



    this.getKeyword = function (index, fileName) {
        const keywordArray1 = require('./keyword')
        const readFromJsonNew = require('../locators/getLocationBasedOnValue')
        const keywordArray = keywordArray1.getReference(fileName)

        var ObjectReferenceArray = keywordArray[0]
        var ObjectTypeArray = keywordArray[1]
        var ActionArray = keywordArray[2]
        var ReturnValueArray = keywordArray[3]
        var Data1Array = keywordArray[4]
        var Data2Array = keywordArray[5]
        var COntuinueOnErrorArray = keywordArray[6]
        var CommentArray = keywordArray[7]
        var noOfTriesArray = keywordArray[8]

        var filedName = ObjectReferenceArray[index]
        var action = ActionArray[index]
        var Data1 = Data1Array[index]
        var Data2 = Data2Array[index]

        //For No of Tries
        var noOfTries1 = noOfTriesArray[index] + 1
        var noOfTries = new Array(noOfTries1)
        for (i = 1; i <= noOfTries1; i++) {
            noOfTries.push(Math.round(Math.random()))
        }


        if (action == 'Click') {
            noOfTries.forEach(function (i) {
                try {
                    browser.sleep(1000)
                    return readFromJsonNew.getLocator(filedName).click()
                }
                catch (err) {
                    console.log('error occured while Cliciking' + err);
                }
            })
        }
        else if (action == 'DoubleClick') {
            noOfTries.forEach(function (i) {
                try {
                    browser.sleep(1000)

                    return browser.actions().
                        mouseMove(readFromJsonNew.getLocator(filedName)).
                        doubleClick().
                        perform();

                }
                catch (err) {
                    console.log('error occured while DoubleClick' + err);
                }
            })
        }

        else if (action == 'SendKeys') {
            noOfTries.forEach(function (i) {
                try {
                    browser.sleep(1000)
                    return readFromJsonNew.getLocator(filedName).sendKeys(Data1)
                }
                catch (err) {
                    console.log('error occured while performing SendKeys' + err);
                }
            })
        }

        else if (action == 'SendRandomValue') {
            noOfTries.forEach(function (i) {
                try {
                    browser.sleep(1000)
                    return readFromJsonNew.getLocator(filedName).sendKeys(randomValues.getRandomNumber(Data1))
                }
                catch (err) {
                    console.log('error occured while performing SendRandomValue' + err);
                }
            })
        }


        else if (action == 'SelectIndex') {
            noOfTries.forEach(function (i) {
                try {

                    readFromJsonNew.getLocator(filedName).then(function (options) {
                        options[Data1].click()
                        browser.sleep(1000)
                    })
                }
                catch (err) {
                    console.log('error occured while performing SelectIndex' + err);
                }
            })
        }

        else if (action == 'SelectValue') {
            noOfTries.forEach(function (i) {
                try {


                    readFromJsonNew.getLocator(filedName).each(function (item) {
                        item.getAttribute('text').then(function (text) {
                            if (text == Data1) {
                                item.click()
                                browser.sleep(1000)
                            }
                        })


                    })

                }
                catch (err) {
                    console.log('error occured while performing SelectValue' + err);
                }
            })
        }

        else if (action == 'Clear') {
            noOfTries.forEach(function (i) {
                try {
                    browser.sleep(1000)
                    return readFromJsonNew.getLocator(filedName).clear()
                }
                catch (err) {
                    console.log('error occured while performing Clear' + err);
                }
            })
        } else if (action == 'Submit') {
            noOfTries.forEach(function (i) {
                try {
                    browser.sleep(1000)
                    return readFromJsonNew.getLocator(filedName).submit()
                }
                catch (err) {
                    console.log('error occured while performing Submit' + err);
                }
            })
        }
        //All elements
        else if (action == 'FirstElementFromGroupOfElement') {
            noOfTries.forEach(function (i) {
                try {
                    browser.sleep(1000)
                    return readFromJsonNew.getLocator(filedName).first()
                }
                catch (err) {
                    console.log('error occured while gettin the first element' + err);
                }
            })
        }
        else if (action == 'LastElementFromGroupOfElement') {
            noOfTries.forEach(function (i) {
                try {
                    browser.sleep(1000)
                    return readFromJsonNew.getLocator(filedName).last()
                }
                catch (err) {
                    console.log('error occured while getting the Last element' + err);
                }
            })
        }
        else if (action == 'CountofElementFromGroupOfElement') {
            noOfTries.forEach(function (i) {
                try {
                    browser.sleep(1000)
                    return readFromJsonNew.getLocator(filedName).count()
                }
                catch (err) {
                    console.log('error occured while getting the Count' + err);
                }
            })
        }
    }
}


module.exports = new getKeywordBasedOnValues()





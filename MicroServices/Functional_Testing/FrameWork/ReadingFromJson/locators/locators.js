var getLocator = function () {
    //Including properties
    const properties = require('../Properties')
    const fs = require('fs');
    // Read the file into raw data
    const path = require("path");
    const rawdata = fs.readFileSync(path.resolve(__dirname, "../locators/locators.json"));
    // Parse the raw data into meaningful JSON format
    let contents = JSON.parse(rawdata);
    //Locator array 
    var locators = contents.Locators

    //Iterating for each element from the Locator.json
    for (var i = 0; i < contents['Locators'].length; i++) {
        var locator = locators[i];


        properties.LocatorName.push(locator['ObjectReference'])

        //Adding XPATH
        if (locator.hasOwnProperty("XPATH")) {
            properties.XPATH.push(locator['XPATH'])
        }
        else {
            properties.XPATH.push("")
        }
        //Adding ID
        if (locator.hasOwnProperty("ID")) {
            properties.ID.push(locator['ID'])
        }
        else {
            properties.ID.push("")
        }
        //Adding NAME
        if (locator.hasOwnProperty("NAME")) {
            properties.NAME.push(locator['NAME'])
        }
        else {
            properties.NAME.push("")
        }
        //Adding CLASSNAME
        if (locator.hasOwnProperty("CLASSNAME")) {
            properties.CLASSNAME.push(locator['CLASSNAME'])
        }
        else {
            properties.CLASSNAME.push("")
        }
        //Adding CSS
        if (locator.hasOwnProperty("CSS")) {
            properties.CSS.push(locator['CSS'])
        }
        else {
            properties.CSS.push("")
        }
        //Adding BINDING
        if (locator.hasOwnProperty("BINDING")) {
            properties.BINDING.push(locator['BINDING'])
        }
        else {
            properties.BINDING.push("")
        }
        //Adding MODEL
        if (locator.hasOwnProperty("MODEL")) {
            properties.MODEL.push(locator['MODEL'])
        }
        else {
            properties.MODEL.push("")
        }
        //Adding TAGNAME
        if (locator.hasOwnProperty("TAGNAME")) {
            properties.TAGNAME.push(locator['TAGNAME'])
        }
        else {
            properties.TAGNAME.push("")
        }
    }

    return [properties.LocatorName, properties.XPATH, properties.ID, properties.NAME,
    properties.CLASSNAME, properties.CSS, properties.BINDING,
    properties.MODEL, properties.TAGNAME]
}


module.exports = new getLocator()
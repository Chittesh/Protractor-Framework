const UploadSheet_Page = function() {

   const uploadSheets = require('../Repository/UploadSheet_Repository')

    this.clickOnBrowseFile = function() {
       uploadSheets.browseFilesButton.click()
    }

    this.clickOnUploadButton = function() {
       uploadSheets.uploadButton.click()
    }



}

module.exports = new UploadSheet_Page;
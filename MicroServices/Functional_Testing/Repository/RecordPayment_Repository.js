var RecordPayment_Repository = function() {

    this.fileCategoryJE = element(by.xpath("//button[.='JE']"))
    this.fileCategoryTF = element(by.xpath("//button[.='TF']"))
    this.referenceNumber = element(by.xpath("//label[.='Reference number:']/..//input"))
    this.calender = element(by.xpath("//div[@class='calender-box']/input"))
    this.year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    this.month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    this.date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
    this.insurerProductID = element.all(by.xpath("//label[.='Insurer product ID']/..//select/option"))
    this.directBill = element.all(by.xpath("//label[.='Direct bill:']/..//select/option"))
    this.clientName = element(by.xpath("//label[.='Client id & name ']/..//div/input"))
    this.clientBalance = element(by.xpath("//label[.='Client balance']/..//div"))
    this.glAccount = element(by.xpath("//label[.='G/L account']/../..//select/option"))
    this.checkNumber = element(by.xpath("//label[.='Check #']/../..//input"))
    this.checkAmount = element(by.xpath("//label[.='Check amount']/../..//input"))
    this.description = element(by.xpath("//label[.='Description (optional)']/..//input"))
    this.addButton = element(by.xpath("//button[.='Add']"))
    this.submitButton = element(by.xpath("//button[.='Submit']"))
    this.approveButton = element(by.xpath("//button[.='Approve']"))
    this.resetButton = element(by.xpath("//button[.='Approve']"))
    this.checkDate = element(by.xpath("//label[.='Check date:']/..//div"))
    this.validateCheckNum = element(by.xpath("//div[@class='grid-tooltip reason-code-ellipses truncate-checknum{']"))

}
module.exports = new RecordPayment_Repository;
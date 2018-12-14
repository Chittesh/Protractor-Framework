var RecordAdjustement_Repository = function() {

    this.insurerProductID = element.all(by.xpath("//label[.='Insurer product ID']/..//select/option"))
    this.directBill = element.all(by.xpath("//label[.='Direct bill:']/..//select/option"))
    this.clientId = element(by.xpath("//label[.='Client id & name ']/..//div/input"))
    this.adjustmentAmount = element(by.xpath("//label[.='Adjustment amount']/..//input"))
    this.description = element(by.xpath("//label[.='Description (optional)']/..//input"))
    this.count = element(by.xpath("//label[.='Count (optional)']/..//input"))
    this.addButton = element(by.xpath("//button[.='Add']"))
    this.submitButton = element(by.xpath("//button[.='Submit']"))
    this.approveButton = element(by.xpath("//button[.='Approve']"))
    this.resetButton = element(by.xpath("//button[.='Reset']"))
    this.productCode = element.all(by.xpath("//label[.='Product code']/..//select/option"))
    this.group = element.all(by.xpath("//label[.='Group']/..//select/option"))
    this.department = element.all(by.xpath("//label[.='Department']/..//select/option"))
    this.calender = element(by.xpath("//div[@class='calender-box']/input"))
    this.year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    this.month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    this.date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))


}
module.exports = new RecordAdjustement_Repository;
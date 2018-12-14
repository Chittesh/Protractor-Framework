var ClinetInformation_Repository = function() {

    this.calender = element(by.xpath("//div[@class='calender-box']/input"))
    this.year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    this.month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    this.date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
    this.insurerID = element.all(by.xpath("//label[.='Insurer ID']/../..//select/option")) 
    this.clientID = element(by.xpath("//label[.='Client ID']/..//input"))
    this.clientName = element(by.xpath("//label[.='Client Name']/..//input"))
    this.country = element.all(by.xpath("//label[.='County']/..//select/option"))
    this.association = element.all(by.xpath("//label[.='Association']/..//select/option"))
    this.customerServiceLocation = element.all(by.xpath("//label[.='Customer Service Location']/..//select/option"))
    this.addressLine1 = element(by.xpath("//label[.='Address Line 1']/../..//hear2-input-controls/input"))
    this.addressLine2 = element(by.xpath("//label[.='Address Line 2']/../..//hear2-input-controls/input"))
    this.zipcode = element(by.xpath("//label[.='Zipcode']/..//input"))
    this.city = element(by.xpath("//label[.='City']"))
    this.state = element(by.xpath("//label[.='State']"))
    this.phoneNumber = element(by.xpath("//label[.='Phone']/..//input"))
    this.faxNumber = element(by.xpath("//label[.='Fax']/..//input"))
    this.setting_eRAAG = element(by.xpath("//div/hear2-client-info/div[2]/div[4]/div[1]/div[2]/label/span"))
    this.addClientContactsButton = element(by.xpath("//button[.='Next: Add client contacts']"))


}
module.exports = new ClinetInformation_Repository;
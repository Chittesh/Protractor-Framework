var ContactDetails_Repository = function() {

    this.accountManager = element(by.xpath("//label[.='Account Manager']/..//div/input"))
    this.benefitTechnicianIII = element(by.xpath("//label[.='Employee Benefit Technician III']/..//div/input"))
    this.benefitTechnicianI = element(by.xpath("//label[.='Employee Benefit Technician I']/..//div/input"))
    this.clientButton = element(by.xpath("//button[.='Client']"))
    this.consultant = element(by.xpath("//button[.='Consultant']"))
    this.consultant_name = element(by.xpath("//label[.='Consultant Name']/..//div/input"))
    this.consultant_firm = element(by.xpath("//label[.='Consultant Firm']/..//div/input"))
    this.submitButton = element(by.xpath("//button[.='Submit']"))


}
module.exports = new ContactDetails_Repository;
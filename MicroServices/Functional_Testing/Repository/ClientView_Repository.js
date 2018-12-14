var ClientView_Repository = function() {

    this.clientInformationLink = element(by.xpath("//a[.='Client Information']"))
    this.contactDetailsLink = element(by.xpath("//a[.='Contact details']"))
    this.editButton = element(by.xpath("//button[.='Edit']"))
    this.terminateButton = element(by.xpath("//button[.='Terminate']"))
    this.dateJoining = element(by.xpath("//label[.='Date Joined']/..//div"))
    this.clientId = element(by.xpath("//label[.='Client ID']/..//div"))
    this.clientName = element(by.xpath("//label[.='Client Name']/..//div"))
   
}
module.exports = new ClientView_Repository;
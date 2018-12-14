var SubscriberView_Repository = function() {

    this.personalDetailsTab = element(by.xpath("//label[.='Personal Details']"))
    this.productsDetailsTab = element(by.xpath("//label[.='Product']"))
    this.historyTab = element(by.xpath("//label[.='History']"))
    this.getHistoryButton = element(by.xpath("//button[.='Get History']"))
    this.billingTab = element(by.xpath("//label[.='Billing']"))
    this.getBillingButton = element(by.xpath("//button[.='Get Bill Details']"))
    this.subscriberName = element(by.xpath("//div[@class='row card-block']/../..//div/h1"))
    this.subscriberSsn = element(by.xpath("//span[@class='s-ssn'][1]"))
    this.adjustPriorPlansButton = element(by.xpath("//span[.='Adjust prior plans']"))
    this.editAllButton = element(by.xpath("//div[@class='form-group edit-term-btn col-md-5']//button[1]"))
    this.terminateAllButton = element(by.xpath("//div[@class='form-group edit-term-btn col-md-5']//button[2]"))
    this.viewAllElegiblePlansLink = element(by.xpath("//a[.='View all eligible plans']"))
    this.hideAllElegiblePlansLink = element(by.xpath("//a[.='Hide all eligible plans']"))
    this.terminateButton = element.all(by.xpath("//button[.='Terminate']"))
    this.editButton = element.all(by.xpath("//div[@class='edit-plan-button']/..//img"))
    this.updateButton = element(by.xpath("//button[.='Update']"))
    this.dependentList = element.all(by.xpath("//div[@class='row list-group dependent-list']"))
    this.addMoreDependents = element(by.xpath("//span[.='Add more dependents']"))
    this.notesTab = element(by.xpath(""))
    this.saveButton = element(by.xpath("//button[.='Save']"))
    this.closeButton = element(by.xpath("//button[.='Close']"))
    this.popUpTerminateButton = element(by.xpath("//button[.='Close']/..//button[.='Terminate']"))
    this.notesTab = element(by.xpath("//label[@aria-controls='panel3']"))
    this.notesTextarea = element(by.xpath("////label[@aria-controls='panel3']/..//textarea"))
    this.addButton = element(by.xpath("//button[.='Add']"))
    this.notesIndicator = element(by.xpath("//label[@aria-controls='panel3']//img"))
    


}
module.exports = new SubscriberView_Repository;
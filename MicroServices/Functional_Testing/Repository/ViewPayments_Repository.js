var ViewPayments_Repository = function() {

    this.searchTextbox = element(by.xpath("//input[@class='   this.h-check-number ng-pristine ng-valid ng-touched']"))
    this.viewButton = element.all(by.xpath("//button[.='View']"))
    this.viewPayment = element(by.xpath("//a[.='View Payments']"))
    this.filter = element(by.xpath("//div/img[@class ='filter-icon' and contains (@src,'../../../assets/img/ico-filter.svg')]"))
    this.searchCheckNumber = element(by.xpath("//div[@class='col-md-3 no-right-padding']/input"))
    this.clientId = element(by.xpath("//div[@class='row col-md-12 ']//input"))
    this.insurerId = element.all(by.xpath("//div[@class='insurer-id-container']/select/option"))
    this.checkAmountRange = element.all(by.xpath("//div[@class='check-amount-container']/select/option"))
    this.checkAmount = element(by.xpath("//div[@class='check-amount-container']//input"))
    this.applyButton = element(by.xpath("//button[.='Apply']"))
    this.cancelButton = element(by.xpath("//button[.='Cancel']"))
    this.backButton = element(by.xpath("//button[.='Back']"))
    this.depositDate = element.all(by.xpath("//div[2]/table//tr/td[3]"))
    this.clientName = element.all(by.xpath("//div[@class='grid-tooltip reason-code-ellipses truncate-client']"))
    this.productId = element.all(by.xpath("//div[@class='row col-md-12']//table//tr/td[2]"))
    const calender = element(by.xpath("//div[@class='calender-box']/input"))
    const year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    const month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    const date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))

}
module.exports = new ViewPayments_Repository;
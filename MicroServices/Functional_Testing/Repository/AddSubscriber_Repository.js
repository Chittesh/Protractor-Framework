var AddSubscriber_Repository = function() {

    this.lastName =  element(by.xpath("//label[.='Last Name']/..//hear2-input-controls/input"));
    this.firstName =    element(by.xpath("//label[.='First Name']/..//hear2-input-controls/input"));
    this.middleName =  element(by.xpath("//label[.='Middle Initial']/..//hear2-input-controls/input"));
    this.ssn =  element(by.xpath("//label[.='SSN']/..//input"));
    this.clientID =  element(by.xpath("//label[.='Client ']/../..//div//div//div//div/input"));
    this.calender = element(by.xpath("//div[@class='calender-box']/input"))
    this.year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    this.month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    this.date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
    this.genderFemale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Female']"));
    this.genderMale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Male']"));
    this.addressLine1 =  element(by.xpath("//label[.='Address Line 1']/../..//hear2-input-controls/input"));
    this.addressLine2 = element(by.xpath("//label[.='Address Line 2']/../..//hear2-input-controls/input"));
    this.zipCode =  element(by.xpath("//label[.='Zipcode']/..//input"));
    this.city = element(by.xpath("//label[.='City']"));
    this.state = element(by.xpath("//label[.='State']"));
    this.mobileNumber =   element(by.xpath("//label[.='Mobile']/..//input"));
    this.homeNumber =   element(by.xpath("//label[.='Home']/..//input"));
    this.workNumber =   element(by.xpath("//label[.='Work']/..//input"));
    this.email =   element(by.xpath("//label[.='Email']/..//input"));
    this.nextButton = element(by.xpath("//span[.='Next:']"));
    this.cobCheckbox = element(by.xpath("//h3[.='COB']/../..//span"));
    this.benifitStartDate = element(by.xpath("//label[.='Benefit Start Date']/..//div/input"));
    this.benifitEndDate = element(by.xpath("//label[.='Benefit End Date']/..//div/input"));
    this.venderCode = element(by.xpath("//label[.='Vendor Code']"));
    this.venderSubscriberCode = element(by.xpath("//label[.='Vendor Subscriber Code']"));
    this.planDetails = element(by.xpath("//label[.='Plan Details']"));
    this.medicareCheckbox = element(by.xpath("//span[@class='custom-control-description']/h3[.='Medicare']"));
    this.medicarePartADate = element(by.xpath("//label[.='Medicare Part A Date']/..//div/input"));
    this.medicarePartBDate = element(by.xpath("//label[.='Medicare Part B Date']/..//div/input"));
    this.medicareOverrideDate = element(by.xpath("//label[.='Override Date']/..//div/input"))
    this.medicarePlan = element(by.xpath("//label[.='Medicare Plan #']"));
    this.overrideDate = element(by.xpath("//button[.='Cancel']"));
    this.addProductLink = element(by.xpath("//a[.='Go to Add Products']"));



}

module.exports = new AddSubscriber_Repository;
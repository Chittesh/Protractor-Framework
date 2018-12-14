var AddDependent_Repository = function() {

this.relationshipDDL = element.all(by.xpath("//label[.='Relationship']/..//select/option"));
this.lastName =  element(by.xpath("//label[.='Last Name']/..//hear2-input-controls/input"));
this.firstName =    element(by.xpath("//label[.='First Name']/..//hear2-input-controls/input"));
this.middleName =  element(by.xpath("//label[.='Middle Initial']/..//hear2-input-controls/input"));
this.ssn =  element(by.xpath("//label[.='SSN']/..//input"));
this.calender = element(by.xpath("//div[@class='calender-box']/input"))
this.year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
this.month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
this.date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
this.genderFemale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Female']"));
this.genderMale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Male']"));
this.nextButton = element(by.xpath("//span[.='Next:']"));
this.cobCheckbox = element(by.xpath("//h3[.='COB']"));
this.benifitStartDate = element(by.xpath("//label[.='Benefit Start Date']/..//div/input"));
this.benifitEndDate = element(by.xpath("//label[.='Benefit End Date']/..//div/input"));
this.venderCode = element(by.xpath("//label[.='Vendor Code']"));
this.venderSubscriberCode = element(by.xpath("//label[.='Vendor Subscriber Code']"));
this.planDetails = element(by.xpath("//label[.='Plan Details']"));
this.medicareCheckbox = element(by.xpath("//span[@class='custom-control-description']/h3[.='Medicare']"));
this.medicarePartADate = element(by.xpath("//label[.='Medicare Part A Date']/..//div/input"));
this.medicarePartBDate = element(by.xpath("//label[.='Medicare Part B Date']/..//div/input"));
this.medicarePlan = element(by.xpath("//label[.='Medicare Plan #']"));
this.overrideDate = element(by.xpath("//label[.='Override Date']/..//div/input"));
this.saveAndAddAnotherDepenedent = element(by.xpath("//button[.='Save and add another dependent']"));
this.subscriberAddress = element(by.xpath("//h3[.='Same as subscriber address']"))
this.subscriberContact = element(by.xpath("//h3[.='Same as subscriber contact']"))

}

module.exports = new AddDependent_Repository;
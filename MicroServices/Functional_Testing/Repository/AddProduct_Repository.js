var AddProduct_Repository = function() {

this.enrollementType = element(by.xpath("//label[.='Enrollment Type :']/..//select"));
this.bargainingUnit = element(by.xpath("//label[.='Bargaining Unit :']/..//select")); 
this.selectMedicalPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='medical-plan-body']//input[@type = 'checkbox']/../..//label/span")); //tr[@class='medical-plan-body']//td//label/span
this.selectDentalPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='dental-plan-body']//input[@type = 'checkbox']/../..//label/span"));
this.selectVisionPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='vision-plan-body']//input[@type = 'checkbox']/../..//label/span"));
this.selectLifePlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='life-plan-body']//td//label/span"));
this.enrollVoluntaryPlan = element(by.xpath("//button[.='Enroll for Voluntary Term Life Insurance']"));
this.coverageAmount = element(by.xpath("//div[.='Coverage Amount']/..//input"));
this.submitButton = element(by.xpath("//button[.='Submit']"));
this.calender = element(by.xpath("//div[@class='calender-box']/input"))
this.year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
this.month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
this.date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
this.enrollChild = element(by.xpath("//label[@class='custom-control custom-checkbox']/..//span")) 

}

module.exports = new AddProduct_Repository;
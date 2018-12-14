var Login_Repository = function() {

   
    this.emailAddress =  element(by.id('i0116'));
    this.password =  element(by.name('passwd'));
    this.nextButton  =  element(by.xpath("//input[@class='btn btn-block btn-primary']"));
    this.yes = element(by.id('idSIButton9'));


}
module.exports = new Login_Repository;
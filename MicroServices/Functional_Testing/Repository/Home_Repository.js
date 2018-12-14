var Home_Repository = function() {

    this.search = element(by.xpath("//div[@class='input-group search-bar-box']//input"));
    this.addSubscriber = element(by.xpath("//div[@class='redirect-img-addSubs']"));
    this.addClient = element(by.xpath("//div[@class='redirect-img-client']"));
    this.addViewPpayment = element(by.xpath("//div[@class='redirect-img-payments']"));
    this.otherAdjustement = element(by.xpath("//div[@class='redirect-img-adj']"));
    this.uploadSheets = element(by.xpath("//div[@class='redirect-img-upload']"));
    this.account = element(by.xpath("//div[@class='user-profile-box']/img"));
    this.logout = element(by.xpath("//span[.='Logout']"));
    this.hear2 = element(by.xpath("//div[@class='col-md-2']/img"));


}
module.exports = new Home_Repository;
var Token = function() {

this.tokenkey = function() {
var AuthenticationContext = require('adal-node').AuthenticationContext;
 
var authorityHostUrl = 'https://login.microsoftonline.com/';
var tenant = 'hear2dev.onmicrosoft.com'; 
var authorityUrl = authorityHostUrl + tenant;
var applicationId = '5aee5cea-5e78-4a22-8cb1-5eaf64a16f3a'; 
var clientSecret = 'gUNQJvWe2Fd1hkDvZbkQdUlCVwT3ouVM+kLeE03Tq9o=';
var context = new AuthenticationContext(authorityUrl);
var resource = 'https://login.microsoftonline.com/';

context.acquireTokenWithClientCredentials(resource, applicationId, clientSecret, function(err, tokenResponse,token) {
    var accessToken = tokenResponse.accessToken
    token = "Bearer " + accessToken
    setTimeout(5000)      
    return token;
    })
  }
  this.token = function(){
    const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI1YWVlNWNlYS01ZTc4LTRhMjItOGNiMS01ZWFmNjRhMTZmM2EiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84MjA3MzUzNS0zODc3LTQwY2UtODU4YS1lOWQzMGFjYzk0MTkvIiwiaWF0IjoxNTQyMzU5Mjk2LCJuYmYiOjE1NDIzNTkyOTYsImV4cCI6MTU0MjQwMjc5NiwiYWlvIjoiNDJSZ1lEQnhYNlhKT3NmbGkvOTFrWVZUaFlPYXArVlp4NVVFMkh6UUxrNEtPRGsvNFNvQSIsImFtciI6WyJwd2QiXSwiaXBhZGRyIjoiMTI1LjE5LjEuMTcwIiwibmFtZSI6IlFBIDEiLCJub25jZSI6IjlkNTMxZGM5LWU3MzAtNGJiMi1hNmNmLTRjZmU0MTFlMWRmYSIsIm9pZCI6IjY4OTBmZmVjLTc5YWQtNDNmMC1iNTM2LTBiMjU4YzdhZGJjNiIsInN1YiI6Il94bHNhb3AtUGNHWDVMclhqMG95cXFhQTZ0UkQxajFFWElidlhRWVhBQzgiLCJ0aWQiOiI4MjA3MzUzNS0zODc3LTQwY2UtODU4YS1lOWQzMGFjYzk0MTkiLCJ1bmlxdWVfbmFtZSI6InFhMUBoZWFyMmRldi5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJxYTFAaGVhcjJkZXYub25taWNyb3NvZnQuY29tIiwidXRpIjoieFJ3WXNrOHcxRWUtblpJbVVfa19BQSIsInZlciI6IjEuMCJ9.HqIoujxp-mXbWtpn82BmQUIBarGJbYpr40KegheP9KVKyEuDiyxUl329OEhK_YgIJzcb4pbpy5_FOmaXFHcR1AYipln4cdrKe-XxJh_D29HOs7KWuFKUXcMaFFcpayaUhbNDXv7gd04LkezjNYYGS47ei7Yz3SEGrptitWhcOrWwFMdWDlrGjtvsMz8p5RuMONRTJMyX3DYlYlBSGWo_Tnx11o4fKqBWzBnRCKDtPWQCOI_QReshQqy_XNCN0yumEt5UprFSeMavGzkir95ZoJ1qnEhUn4la2iL_ekhx7-aX4EmAubJIxo7B7bctYvmdWq1TiZXT-50_HP7OrGqcsA"
  
  }
  
}



module.exports = new Token;
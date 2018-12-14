var chai = require('chai');
var expect = require('chai').expect;
var should = require('should');
var request = require('request');
var randomValues = require('../../Utils/RandomValues_page')
var constants = require('../../Utils/Constants')
chai.should();  
chai.use(require('chai-http'));
var fs = require('fs')
chai.request;
const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI1YWVlNWNlYS01ZTc4LTRhMjItOGNiMS01ZWFmNjRhMTZmM2EiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84MjA3MzUzNS0zODc3LTQwY2UtODU4YS1lOWQzMGFjYzk0MTkvIiwiaWF0IjoxNTQ0MDg4NTM1LCJuYmYiOjE1NDQwODg1MzUsImV4cCI6MTU0NDEzMjAzNSwiYWlvIjoiNDJSZ1lPQ3YrZi9xblAzYnBiTXlHVE81dU1TNXNyK2Ztamo5UXREZmk2THVVczdoa3FJQSIsImFtciI6WyJwd2QiXSwiaXBhZGRyIjoiMTI1LjE5LjEuMTcwIiwibmFtZSI6IlFBIDEiLCJub25jZSI6IjM4YjViYTViLWRlMjQtNDU1Yy1iYTM2LTE4NTQ1YmNhNGI4MCIsIm9pZCI6IjY4OTBmZmVjLTc5YWQtNDNmMC1iNTM2LTBiMjU4YzdhZGJjNiIsInN1YiI6Il94bHNhb3AtUGNHWDVMclhqMG95cXFhQTZ0UkQxajFFWElidlhRWVhBQzgiLCJ0aWQiOiI4MjA3MzUzNS0zODc3LTQwY2UtODU4YS1lOWQzMGFjYzk0MTkiLCJ1bmlxdWVfbmFtZSI6InFhMUBoZWFyMmRldi5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJxYTFAaGVhcjJkZXYub25taWNyb3NvZnQuY29tIiwidXRpIjoiZjJkVmpNNDg2a0NMZXNhQ2JCTlVBQSIsInZlciI6IjEuMCJ9.MJwin8ppbTtfC72TwIbV7HP06wmEANzSXceFjrwGy2Qu3P1tTyQj9W-oyiONZXudHnElCeCztNoT_l7J9EkDQdxHdyzBb93WzLPegAG2xmZxvduD-rfCp-XEg1-7ciwjru8o-IgkUxFgfWYSMtZYZWL2D-JxjXXm7EeK-IFURz3T5A8eed45LmzR0Q4IZ6Xc31KbooWq8SzcNpTd8cgjZAEjXuqg9HnWBYtbbDtVuSJWb8F6Q5p8jwYPa7-DG8wGnPrTkonhkeAU6-gKEth4sjT2FZ3YILSfhbLNrBuIBA8ecDunrXaWSorE5ojCD4rgaltcYsITSxWRWzFGW54EJg'

describe ("Validate GET for subscriber/client/product",function(){
    this.timeout(5000)
   
    it("should get all detils of susbscriber", function() {  
        var reportFileName = "../Responses/" + "ssnResponse" + randomValues.getRandomNumber(3) + ".json"
        return chai.request(constants.SUBSCRIBER_SEARCH)
        .get('/694418296')
        .set('Authorization', token)
        .then (function(res){
            expect(res).to.have.status(200)
            expect(res).to.be.json
            var response = res.body;
            fs.appendFileSync(reportFileName, JSON.stringify(response))
        })
    })

    it("should get all details of client" , function(){
        var reportFileName = "../Responses/" + "clientResponse" + randomValues.getRandomNumber(3) + ".json"
        return chai.request(constants.CLIENT_SEARCH)
        .get(constants.clientID3)
        .set('Authorization',token)
        .then(function(res){
            expect(res).to.have.status(200)
            expect(res).to.be.json
            var response = res.body
            fs.appendFileSync( reportFileName, JSON.stringify(response) )
          

        })
    })

    it("should get all details of zipcode" , function() {
        var reportFileName = "../Responses/" + "zipcodeResponse" + randomValues.getRandomNumber(3) + ".json"
        return chai.request(constants.ZIPCODE_SEARCH)
        .get(constants.zipcode1)
        .set('Authorization',token)
        .then( function(res) {
            var response = res.body;
            fs.appendFileSync( reportFileName,JSON.stringify(response) )
        })
    })
})
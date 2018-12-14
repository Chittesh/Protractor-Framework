var subscriber_details = require('../Json/Subscriber_Details')
var client_details = require('../Json/Client_Details')
var constants = require('../../Utils/Constants')
var randomValues = require('../../Utils/RandomValues_page')
var chai = require('chai');
var expect = require('chai').expect
var should = require('should')
var request = require('request')
chai.should()
chai.use(require('chai-http'))
var fs = require('fs')
chai.request
const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI1YWVlNWNlYS01ZTc4LTRhMjItOGNiMS01ZWFmNjRhMTZmM2EiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84MjA3MzUzNS0zODc3LTQwY2UtODU4YS1lOWQzMGFjYzk0MTkvIiwiaWF0IjoxNTQ0MDg4NTM1LCJuYmYiOjE1NDQwODg1MzUsImV4cCI6MTU0NDEzMjAzNSwiYWlvIjoiNDJSZ1lPQ3YrZi9xblAzYnBiTXlHVE81dU1TNXNyK2Ztamo5UXREZmk2THVVczdoa3FJQSIsImFtciI6WyJwd2QiXSwiaXBhZGRyIjoiMTI1LjE5LjEuMTcwIiwibmFtZSI6IlFBIDEiLCJub25jZSI6IjM4YjViYTViLWRlMjQtNDU1Yy1iYTM2LTE4NTQ1YmNhNGI4MCIsIm9pZCI6IjY4OTBmZmVjLTc5YWQtNDNmMC1iNTM2LTBiMjU4YzdhZGJjNiIsInN1YiI6Il94bHNhb3AtUGNHWDVMclhqMG95cXFhQTZ0UkQxajFFWElidlhRWVhBQzgiLCJ0aWQiOiI4MjA3MzUzNS0zODc3LTQwY2UtODU4YS1lOWQzMGFjYzk0MTkiLCJ1bmlxdWVfbmFtZSI6InFhMUBoZWFyMmRldi5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJxYTFAaGVhcjJkZXYub25taWNyb3NvZnQuY29tIiwidXRpIjoiZjJkVmpNNDg2a0NMZXNhQ2JCTlVBQSIsInZlciI6IjEuMCJ9.MJwin8ppbTtfC72TwIbV7HP06wmEANzSXceFjrwGy2Qu3P1tTyQj9W-oyiONZXudHnElCeCztNoT_l7J9EkDQdxHdyzBb93WzLPegAG2xmZxvduD-rfCp-XEg1-7ciwjru8o-IgkUxFgfWYSMtZYZWL2D-JxjXXm7EeK-IFURz3T5A8eed45LmzR0Q4IZ6Xc31KbooWq8SzcNpTd8cgjZAEjXuqg9HnWBYtbbDtVuSJWb8F6Q5p8jwYPa7-DG8wGnPrTkonhkeAU6-gKEth4sjT2FZ3YILSfhbLNrBuIBA8ecDunrXaWSorE5ojCD4rgaltcYsITSxWRWzFGW54EJg'

describe("validate post endpoints", function(){
  this.timeout(5000)

it("should post the subscriber details",function(){
      var reportFileName = "../Responses/" + "SubscriberPostResponse" + randomValues.getRandomNumber(3) + ".json"
      return chai.request(constants.SUBSCRIBER_URL)
      .post('/add')
      .set('Authorization',token)
      .set('Accept','application/json')
      .send(subscriber_details.subscriber_details)
      .then(function(res){
          expect(res).to.have.status(200)
          expect(res).to.be.json
          var response = res.body
          fs.appendFileSync(reportFileName,JSON.stringify(response))
      })
  })

  it("should post new client", function(){
      var reportFileName = "../Responses/" + "ClientPostResponse" + randomValues.getRandomNumber(3) + ".json"
      return chai.request(constants.CLIENT_URL)
      .post('/addclient/addclientsinfo')
      .set('Authorization',token)
      .set('Accept','application/json')
      .send(client_details.clientDetails)
      .then(function(res){
          expect(res).to.have.status(200)
          expect(res).to.be.json
          var response = res.body
          fs.appendFileSync(reportFileName,JSON.stringify(response))
      })
  })


})


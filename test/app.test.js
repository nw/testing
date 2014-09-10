var request = require('supertest')
  , app = require('../app');

describe("Application", function(){


  it('should return 200 response code', function(done){
    request(app)
      .get('/')
      .end(function(err, res){
        res.statusCode.should.equal(200);
        done(err);
      })
  })

  it('should return hello world', function(done){
    request(app)
      .get('/')
      .end(function(err, res){
        res.text.should.match(/Hello World/);
        done(err);
      })
  })


})

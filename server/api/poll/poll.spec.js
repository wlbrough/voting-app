'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest')(app);

describe('rest api for polls', function() {
  var id;
  var user = 'ed881f991c116c18f2d6aaa3';
  
  it('posts an object', function(done) {
    request.post('/api/polls')
      .send({
        name: 'Who is your favorite Harry Potter character?',
        answers: [{text: 'Harry'}, {text: 'Ron'}, {text: 'Hermione'}]
      })
      .end(function(e, res) {
        should(e).equal(null);
        // should(res.body.length).equal(1);
        should(res.body._id.length).equal(24);
        id = res.body._id;
        done();
      });
  });
  
  it('retrieves an object', function(done) {
    request.get('/api/polls/'+id)
      .end(function(e, res) {
        should(e).equal(null);
        should(typeof res.body).equal('object');
        should(res.body._id).equal(id);
        should(res.body._id.length).equal(24);
        done();
      });
  });
  
  it('retrieves a collection', function(done) {
    request.get('/api/polls')
      .end(function(e, res) {
        should(e).equal(null);
        should(res.body.length).above(0);
        should(res.body.map(function(item) { return item._id })).containEql(id);
        done();
      });
  });
  
  it('retrieves a collection filtered by user', function(done) {
    request.get('/api/polls?user='+user)
      .end(function(e, res) {
        should(e).equal(null);
        should(res.body.length).equal(2);
        done();
      });
  });
  
  it('updates an object', function(done) {
    request.put('/api/polls/'+id)
      .send({
        name: 'Who is your least favorite Harry Potter character?',
        answers: [{text: 'Harry'}, {text: 'Ron'}, {text: 'Hermione'}]
      })
      .end(function(e, res) {
        should(e).equal(null);
        should(typeof res.body).equal('object');
        should(res.status).equal(200);
        done();
      });
  });
  
  it('checks an updated object', function(done) {
    request.get('/api/polls/'+id)
      .end(function(e, res) {
        should(e).equal(null);
        should(typeof res.body).equal('object');
        should(res.body._id.length).equal(24);
        should(res.body._id).equal(id);
        should(res.body.name).equal('Who is your least favorite Harry Potter character?');
        done();
      });
  });
  
  it('removes an object', function(done) {
    request.del('/api/polls/'+id)
      .end(function(e, res) {
        should(e).equal(null);
        should(typeof res.body).equal('object');
        should(res.status).equal(204);
        done();
      });
  });
})
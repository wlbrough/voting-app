'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var Poll = require('./poll.model');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

describe('GET /api/polls', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/polls')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('POST /api/polls', function() {
  
  it('should save a new record', function(done) {
    var poll = new Poll({
      name: 'Which is a better movie?',
      owner: user,
      created: Date.now(),
      answers: [
        { text: 'Bladerunner', votes: 0 },
        { text: 'Up', votes: 0 }
      ]
    });
    poll.save(function(err, saved) {
      should.not.exist(err);
      done();
    });
  });
  
  it('should throw an error when the name is blank', function(done) {
    var poll = new Poll({
      owner: user,
      created: Date.now(),
      answers: [
        { text: 'Bladerunner', votes: 0 },
        { text: 'Up', votes: 0 }
      ]
    });
    poll.save(function(err) {
      should.exist(err);
      err.errors.name.message.should.equal('Poll Name cannot be blank');
      done();
    });
  });
  
  it('should throw an error if there are less than two answers', function(done) {
    var poll = new Poll({
      name: 'Which is a better movie?',
      owner: user,
      created: Date.now(),
      answers: [
        { text: 'Bladerunner', votes: 0 }
      ]
    });
    poll.save(function(err) {
      should.exist(err);
      done();
    });
  });
  
  afterEach(function(done) {
    Poll.remove().exec();
    done();
  })
  
});
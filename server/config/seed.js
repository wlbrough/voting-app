/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Poll = require('../api/poll/poll.model');
var User = require('../api/user/user.model');

Poll.find({}).remove(function() {
  Poll.create({
    name : 'What is your favorite task runner?',
    owner: 'ed881f991c116c18f2d6aaa3',
    answers : [{text: 'Grunt'}, {text: 'Gulp'}, {text: 'Task runners are for newbs.'}]
  }, {
    name : 'What is your favorite CSS preprocessor?',
    owner: 'ed881f991c116c18f2d6aaa3',
    answers : [{text: 'SASS'}, {text: 'Less'}, {text: 'Stylus'}]
  }, {
    name : 'What is your favorite water?',
    answers : [{text: 'Tap'}, {text: 'Well'}, {text: 'Soda'}]
  },  {
    name : 'What is your favorite person?',
    answers : [{text: 'Ghandi'}, {text: 'Mother Theresa'}, {text: 'Kanye West'}]
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
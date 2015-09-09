'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  name: { 
    type: String, 
    trim: true,
    required: 'Poll Name cannot be blank'
  },
  owner: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now()
  },
  answers: [
    {
      text: { 
        type: String, 
        trim: true,
        required: 'Answer cannot be blank'
      },
      votes: { type: Number, default: 0 }
    }
  ]
});

var Poll = mongoose.model('Poll', PollSchema);

Poll.schema.path('answers').validate(function(v) {
  return v.length >= 2;
}, 'You must provide at least two options');

PollSchema.statics.mostRecent = function(cb) {
  this.find({})
      .sort('-created')
      .limit(5)
      .exec(cb);
};

module.exports = mongoose.model('Poll', PollSchema);
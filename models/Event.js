const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  templateId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('event', EventSchema);
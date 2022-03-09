const mongoose = require('mongoose');

const TemplateSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  unit: { // for first order events
    type: String,
  },
  points: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('template', TemplateSchema);
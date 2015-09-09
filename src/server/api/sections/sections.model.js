'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SectionSchema = new Schema({
  url: String,
  blocks: [],
  
});

module.exports = mongoose.model('Sections', SectionSchema);

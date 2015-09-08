'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlocksSchema = new Schema({
  url: String,
  blocks: [],
  
});

module.exports = mongoose.model('Blocks', BlocksSchema);
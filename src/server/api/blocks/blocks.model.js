'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlocksSchema = new Schema({
  name: String,
  version: String,
  state: {},
  markup: {},
  hash: String
  
});

module.exports = mongoose.model('Blocks', BlocksSchema);
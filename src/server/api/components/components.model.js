'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ComponentsSchema = new Schema({
  name: String,
  version: String,
  state: [],
  markup: {},
  hash: String
  
});

module.exports = mongoose.model('Components', ComponentsSchema);
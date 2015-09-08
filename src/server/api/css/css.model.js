'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CssSchema = new Schema({
  name: String,
  params: String,
  selector: { type: String },
  type: String,
  hash: { type: String, unique: true},
  nodes: []
  
});

module.exports = mongoose.model('CSS', CssSchema);
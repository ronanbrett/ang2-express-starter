'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CssSchema = new Schema({
  hash: String,
  type: String,
  declarations: [],
  position: {},
  name: String,
  keyframes: [],
  vendor: String,
  comment: String,
  charset: String,
  media: String,
  document: String,
  import: String,
  rules: [],
  namespace: String,
  selectors: [],
  supports: String
  
});

module.exports = mongoose.model('CSS', CssSchema);
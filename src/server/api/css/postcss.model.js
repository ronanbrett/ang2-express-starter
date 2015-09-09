'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostCssSchema = new Schema({
  name: String,
  params: String,
  type: String,
  hash: { type: String, unique: true},
  nodes: []
  
});

module.exports = mongoose.model('PostCSS', PostCssSchema);
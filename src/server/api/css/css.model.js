'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CssSchema = new Schema({
  selector: { type: String },
  hash: { type: String, unique: true}
});

module.exports = mongoose.model('CSS', CssSchema);
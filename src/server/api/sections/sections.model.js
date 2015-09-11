'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SectionSchema = new Schema({
	title: String,
	contents: [{
		id: String,
		position: Number,
		type: String,
		content: ''
	}]
  
});

module.exports = mongoose.model('Sections', SectionSchema);

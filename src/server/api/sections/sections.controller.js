var fs = require('fs'),
	_ = require('lodash'),
	Sections = require('./sections.model');
	

exports.index = function(req, res) {
	Sections.find({}, function(err, docs) {
		res.send(docs)
	})
}

exports.add = function(req, res) {
	Sections.create(req.body, function(err, doc){
		res.send(doc)
	})
}

exports.update = function(req, res) {
	Sections.findById(req.body.id, function(err, doc) {
		doc = _.merge(doc, req.body.doc);
		doc.save();
	})
}
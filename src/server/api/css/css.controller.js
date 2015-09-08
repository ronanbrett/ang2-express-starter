var postcss = require('postcss')
	fs 		= require('fs'),
	_ = require('lodash'),
	cycle = require('cycle'),
	CircularJSON = require('circular-json');
var CSS = require('./css.model');

var crypto = require('crypto');



exports.index = function(req, res) {
	
	fs.readFile('tests/app.css', function (err, data) {
		if (err) throw err;
		var root1 = postcss.parse(data);

		root1 = CircularJSON.stringify(root1)
		root1 = JSON.parse(root1)
		
		var root2 = _.map(root1.nodes, function(e){
			e.parent = null;
			if(e.selector){
				e.hash = crypto.createHash('md5').update(e.selector).digest('hex');
			} else {
				e.hash = crypto.createHash('md5').update(e.name+e.params).digest('hex');
			}
			return e;
		})
	

		root2.forEach(function(record){
			var query = {};
			query['hash'] = record['hash'];

			CSS.update(query, record, { upsert: true }, function(err, doc) {
				if (err) console.log(err);
			})
		});
		
		
	});
}	






exports.index();
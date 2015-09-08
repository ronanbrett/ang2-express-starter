var postcss 		= require('postcss')
	fs 				= require('fs'),
	_ 				= require('lodash'),
	circularJSON 	= require('circular-json'),
	CSS 			= require('./css.model'),
	crypto 			= require('crypto');


exports.index = function(req, res) {
	CSS.find({}, function(err, docs) {
		res.send(docs);
	})
}
exports.importCSS = function(req, res) {
	
	fs.readFile('tests/app.css', function (err, data) {
		if (err) throw err;
		var root1 = postcss.parse(data);
		
		// Strip out circular references
		root1 = circularJSON.stringify(root1)
		root1 = JSON.parse(root1)
		
		// Hash the selector/Name to make sure only one rule at a time
		var root2 = _.map(root1.nodes, function(e){
			e.parent = null;
			if(e.selector){
				e.hash = crypto.createHash('md5').update(e.selector).digest('hex');
			} else {
				e.hash = crypto.createHash('md5').update(e.name+e.params).digest('hex');
			}
			return e;
		})
	
		// Overwrite Database Entries
		root2.forEach(function(record){
			var query = {};
			query['hash'] = record['hash'];

			CSS.update(query, record, { upsert: true }, function(err, doc) {
				if (err) console.log(err);
			})
		});
	});
}
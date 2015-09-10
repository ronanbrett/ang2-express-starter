var postcss 		= require('postcss')
	fs 				= require('fs'),
	_ 				= require('lodash'),
	circularJSON 	= require('circular-json'),
	CSS 			= require('./css.model'),
	cssParse		= require('css'),
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
			// TODO: Update this to use POSTCSS Model instead
			// CSS.update(query, record, { upsert: true }, function(err, doc) {
			// 	if (err) console.log(err);
			// })
		});
	});
}


exports.index = function(req, res) {
	CSS.find({}, function(err, docs){
		if(err) console.log(err);
		res.send(docs)
	})
}


exports.import = function(req, res) {
	fs.readFile('tests/app.css', function (err, data) {
		data = cssParse.parse(data.toString());

		data.stylesheet.rules.forEach(function(rule){
			var id = '';
			switch(rule.type) {
				case 'media':
				id = rule.media;
				break;
				case 'rule':
				id = rule.selectors.join();
				break;
				case 'keyframes':
				id = rule.vendor ? rule.vendor + rule.name : rule.name; 
				break;
				case 'comment':
				id = rule.comment;
				break;
				case 'charset':
				id = rule.charset;
				break;
				case 'custom-media':
				id = rule.name;
				break;
				case 'document':
				id = rule.document;
				break;
				case 'font-face':
				id = rule.declarations.join();
				break;
				case 'host':
				id = rule.rules.join();
				break;
				case 'import':
				id = rules.import;
				break;
				case 'namespace':
				id= rules.namespace;
				break;
			}
			rule.hash = crypto.createHash('md5').update(id).digest('hex');
			var query = {};
			query['hash'] = rule['hash'];
			CSS.update(query, rule, { upsert: true }, function(err, doc) {
				if (err) console.log(err);
				console.log(doc)
			})
		})
		
	})
}

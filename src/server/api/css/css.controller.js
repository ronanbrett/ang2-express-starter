var postcss = require('postcss')
	fs 		= require('fs'),
	_ = require('lodash');
var CSS = require('./css.model');

var crypto = require('crypto');
var name = 'braitsch';
var hash = 




function hashcode(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

exports.index = function(req, res) {
	
	fs.readFile('tests/app.css', function (err, data) {
		if (err) throw err;
		var root1 = postcss.parse(data);

		res.send(root1);
		
		var root2 = _.map(root1.nodes, function(e){
			e.parent = null;
			e.source = null;
			if(e.selector){
				e.hash = crypto.createHash('md5').update(e.selector).digest('hex');
			} else {
				e.hash = crypto.createHash('md5').update(e.name+e.params).digest('hex');
			}
			return e;
		})
		
		console.log(_.filter(root2,function(e){
			console.log(e.hash)
		}))
		
		
	
		
		
		
		//console.log(filteredRoots)
		
		
		var bulk = CSS.collection.initializeUnorderedBulkOp();
		
		root2.forEach(function(el) {
			bulk.find({'hash': el.hash}).upsert().update('selector');
		}, this);

		bulk.execute(function (error) {
			console.log(error)                 
		});
		
		// CSS.update(root2, {upsert: true}, function(err, doc) {
		// 	if (err) console.log(err);
		// 	console.log(doc)
		// })
		
		
		
	});
}	




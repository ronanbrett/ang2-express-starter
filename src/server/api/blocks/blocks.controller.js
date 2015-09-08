var fs = require('fs'),
	Blocks = require('./blocks.model');
	

exports.index = function(req, res) {
	fs.readFile('tests/ui-blocks.json', function (err, data) {
		if (err) throw err;
		data = JSON.parse(data.toString());
		
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				var element = data[key];
				
				var query = {};
				query['url'] = key;
				
				Blocks.update(query, element, {upsert: true}, function(err, doc) {
					if(err) console.log(err);
					
				} )
				
			}
		}
		
			res.send(data)
	})
	

	
}
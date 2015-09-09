var fs = require('fs'),
	cheerio = require('cheerio'),
	Blocks = require('./blocks.model'),
	crypto 			= require('crypto');
	

exports.index = function(req, res) {
	fs.readFile('tests/ui-blocks.json', function (err, data) {
		if (err) throw err;
		data = JSON.parse(data.toString());
		
		var blocks = [];
		
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				var element = data[key];
				
				var query = {};
				query['url'] = key;
				
				data[key].blocks.forEach(function(element) {
					element.hash = crypto.createHash('md5').update(key + element.name).digest('hex');
					console.log(element);
					$ = cheerio.load(element.markup.example);
					console.log($.css());
					Blocks.update(query, element, {upsert: true}, function(err, doc) {
					if(err) console.log(err);
				} )
				
				}, this);

				
				
			}
		}
		
			//res.send(data)
	})
}

exports.index();
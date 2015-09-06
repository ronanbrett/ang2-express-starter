var fs = require('fs');
var dss = require('dss');
var readdirp = require('readdirp');

exports.index = function(req, res) {
	var scss = [];

	readdirp({
	    root: './app',
	    fileFilter: '*.scss'
	})

	.on('data', function(entry) {

	    fileContents = fs.readFileSync(entry.fullPath);
	    dss.parser('version', function(i, line, block) {
	    	return line
		})
		dss.parser('lastUpdated', function(i, line, block) {
	    	return new Date();
		})
	    dss.parse(fileContents, {}, function(parsedObject) {
	        scss.push({
	        	file: entry.name.slice(0, -5),
	            blocks: parsedObject.blocks[0]
	        });

	    });
	})
	.on('end', function() {

	});
	
}
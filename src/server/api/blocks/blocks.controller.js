var fs = require('fs');


exports.index = function(req, res) {
	res.send({"styles\\layout\\_menu":{"blocks":[{"name":"Menu","description":"This is a Menu","version":"0.0.1","date":"","state":{"name":".active","escaped":"active","description":"Highlights when hovering."},"markup":{"example":"<menu></menu>","escaped":"&lt;menu&gt;&lt;/menu&gt;"}}]}})
	
}
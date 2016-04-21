var http = require('http');

var resumeService = function(){
	// read json here
	var getJson = function(callback){
		// call mongodb get result
		// Define JSON File
		var fs = require("fs");
		// Get content from file
		var contents = fs.readFileSync("resume.json");
		// Define to JSON type
		var jsonContent = JSON.parse(contents);
		callback(jsonContent);
	};

	return {
		getJson: getJson
	}
}
module.exports = resumeService;
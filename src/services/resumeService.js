var http = require('http');

var resumeService = function(){
	// read json here
	var getJson = function(callback){
		// will replace to mongo db instead		
		var fs = require("fs");
		var contents = fs.readFileSync("resume.json");		
		var jsonContent = JSON.parse(contents);

		callback(jsonContent);
	};

	return {
		getJson: getJson
	}
}
module.exports = resumeService;
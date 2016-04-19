var http = require('http');

var resumeService = function(){
	// read json here
	var getJson = function(callback){
		// call mongodb get result
		var result = null;
		var err = null;
		
		var options = {
			host: '/',
			path: 'resume.json'
		};
		http.request(options, function(response){
			var jsonStr='';
			response.on('data', function(chunk){
				jsonStr += chunk;
			}).on(end, function(){
				console.log(str);
				callback(null, jsonStr);
			})
		}).end();
	}
}
module.exports = resumeService;
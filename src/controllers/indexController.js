var resumeService = require('resumeService');
var indexController = function(resumeService){
	// get json resume from indexService
	var resume;
	resumeService.getJson(function(err, data){
		resume = data;
	});

	var getTimeLine = function(){}
	var getChart = function(){}
	return {
		getTimeLine: getTimeLine,
		getChart: getChart
	}
}

module.exports = indexController;
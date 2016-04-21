var resumeService = require('../services/resumeService');
var indexController = function(resumeService, req, res){
	// get json resume from indexService
	var resume;
	console.log(resumeService)
	

	var getTimeLine = function(req, res){
		resumeService.getJson(function(err, data){
			resume = data;
			console.log(data);
			res.render('index', {user: ['Dao Nguyen']});
		});
	}
	var getChart = function(req, res){}
	return {
		getTimeLine: getTimeLine,
		getChart: getChart
	}
}

module.exports = indexController;
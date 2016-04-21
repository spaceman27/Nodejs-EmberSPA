var indexController = function(resumeService){
	// get json resume from indexService	
	var getTimeLine = function(req, res){										
		resumeService.getJson(function(data){
			console.log(data);
			res.render('index', data);
		});
	}
	var getChart = function(req, res){

	};
	return {
		getTimeLine: getTimeLine,
		getChart: getChart
	}
}

module.exports = indexController;
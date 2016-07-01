var indexController = function(resumeService){
	// get json resume from indexService	
	var getTimeLine = function(req, res){										
		resumeService.getJson(function(data){
			console.log(data);
			//console.log(data.phoneNumbers.values[0].phoneNumber);
			res.render('../../clients/app/templates/application', data);
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
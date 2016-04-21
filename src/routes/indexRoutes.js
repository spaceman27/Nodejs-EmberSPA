var express = require('express');
var indexRouter = express.Router();

var indexController = require('../controllers/indexController')();

var router = function(){		
	indexRouter.route('/').get(indexController.getTimeLine);
}

module.exports = router;
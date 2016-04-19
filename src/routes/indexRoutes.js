var express = require('express');
var indexRouter = express.Router();

var indexController = require('../controllers/indexController')();

var router = function(){
	// indexRouter.use(function(req, res){
		
	// })
	indexRouter.route('/').get(indexController);
}
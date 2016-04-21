var express = require('express');
var indexRouter = express.Router();

var resumeService = require('../services/resumeService')();
var indexController = require('../controllers/indexController')(resumeService);

indexRouter.route('/').get(indexController.getTimeLine);	

module.exports = indexRouter;
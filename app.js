var express = require("express");
var app = express();

var port = 3000;

app.use(express.static('public'));

app.set('views', './src/views');
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

var indexRouter = require('./src/routes/indexRoutes');
app.use('/', indexRouter);
app.listen(port, function(err){
	console.log("Welcome to NodeCrash Project on port: " + port );
});
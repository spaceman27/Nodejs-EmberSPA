var express = require("express");
var app = express();

var port = 3000;

app.use(express.static('public'));
app.set('view', './src/views');
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));


app.get('/', function(req, res){
	res.send('Hello world');
});

app.listen(port, function(err){
	console.log("Welcome to NodeCrash Project on port: " + port );
});
var express = require("express");
var app = express();

var port = 3000;
app.use(express.static('public'));
app.get('/', function(req, res){
	res.send('Hello world');
});

app.listen(port, function(err){
	console.log("Welcome to NodeCrash Project on port: " + port );
});
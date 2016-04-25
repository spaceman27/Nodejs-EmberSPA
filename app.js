var express = require("express");
var app = express();

var port = 3000;

app.use(express.static('public'));

/* Set HandleBars template engine */
app.set('views', './src/views');
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

/* Register for Crossing Domain */
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

var indexRouter = require('./src/routes/indexRoutes');
app.use('/', indexRouter);

app.get('/auth/linkedin/callback', function (req, res) {
  var OAuth2 = OAuth.OAuth2;    
     var twitterConsumerKey = 'your key';
     var twitterConsumerSecret = 'your secret';
     var oauth2 = new OAuth2(server.config.keys.twitter.consumerKey,
       twitterConsumerSecret, 
       'https://api.twitter.com/', 
       null,
       'oauth2/token', 
       null);
     oauth2.getOAuthAccessToken(
       '',
       {'grant_type':'client_credentials'},
       function (e, access_token, refresh_token, results){
       console.log('bearer: ',access_token);
       done();
     });
})

app.listen(port, function(err){
	console.log("Welcome to NodeCrash Project on port: " + port );
});
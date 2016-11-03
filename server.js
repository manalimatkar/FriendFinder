// Include Packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Create Express Server
var app = express();
var PORT = process.env.PORT || 8080;

// Initialise body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Include ROUTER
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Create LISTENER
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});


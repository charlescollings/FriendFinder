var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


require('./app/routing/apiRoutes')(app); 
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
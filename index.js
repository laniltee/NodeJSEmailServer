var express = require('express');

var main_controller = require('./main.controller');

var app = express();

app.use('/', main_controller);

app.listen(8083, function(error){
	if(!error){
		console.log('UP !');
	}
});
'use strict';

const express = require('express');

// constants
const PORT = process.env.PORT || 8000;

// app
const app = express();

app.get('/', function(req, res) {
	res.send("Hello mongo nodes!\n");
});

app.use(function(req, res) {
	res.sendStatus(404);
});

var server = app.listen(PORT, function() {
	var port = server.address().port;
	console.log('Express server http://localhost is listening on port: %s', port);
});



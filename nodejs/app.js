'use strict';

const express = require('express'),
	  engines = require('consolidate');

// constants
const PORT = 8080;

// app
const app = express();

// template configuration
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// root route
app.get('/', function(req, res) {
	res.render('hello', { name : 'mongo nodes..' });

	// print error on stdout
	req.on('error', function(err) {
	    console.log(err);
	});
});

// 404 - Not found error for all not expected routes
app.use(function(req, res) {
	res.sendStatus(404);
});

// debugger for exception, which is not suggested to use for production
process.on('uncaughtException', function (err) {
    console.log(err);
});

var server = app.listen(PORT, function() {
	var port = server.address().port;
	console.log('Express server http://localhost is listening on port: %s', port);
});



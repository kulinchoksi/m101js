'use strict';

const express = require('express');

// constants
const PORT = process.env.PORT || 8000;

// app
const app = express();

app.get('/', function(req, res) {
	res.send("Hello world!\n");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

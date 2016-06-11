'use strict';

module.exports = function() {
	this.httpProxy = require('http-proxy');

	// Create a proxy server with custom application logic
	this.httpProxyServer = this.httpProxy.createProxyServer({});
	console.log(this.httpProxyServer);
};
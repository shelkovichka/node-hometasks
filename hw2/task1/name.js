'use strict'

const http = require('http'); 
http.createServer((request, response) => { 
	console.log("HTTP works!");
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('<h1>Hello</h1>');

    response.statusCode = 404;
	response.end();
}).listen(8080);
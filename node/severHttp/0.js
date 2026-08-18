const http = require('http');

http.createServer(function(req, res) {
	res.end('Hello World');
	}).listen(10);

console.log('server on')
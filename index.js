'use strict';
var fs = require('fs');
var http = require('http');

 exports.get = function(event, context) {
   var contents = fs.readFileSync("public/index.html");
   context.succeed({
     statusCode: 200,
     body: contents.toString(),
     headers: {'Content-Type': 'text/html'}
   });
 };
 

 http.createServer(function (req, res) {
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end('Hello World!');
 }).listen(8080);

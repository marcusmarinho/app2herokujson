const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/app2heroku'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/app2heroku/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 8080);

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('banco-de-dados.json');
var middlewares = jsonServer.defaults();
var port = Number(process.env.PORT || 3000);
server.use(middlewares);
server.use(router);
server.listen(port, function () {
  console.log('JSON Server is running')
});
var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));
app.use('/assets',  express.static(__dirname + '/bower_components'));

server.listen(3000,function() {

  console.log("Listening on port 3000");

});

module.exports = server;
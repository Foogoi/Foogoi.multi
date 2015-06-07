var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    util = require('util'),
    io = require('socket.io')(server);

var socket,
    players;

//initializing an array of players
function init() {
    players = []
}

init();

socket = io.listen(8000);

socket.configure(function() {
    socket.set("transports", ["websocket"]);
    socket.set("log level", 2);
});




/*
app.use(express.static(__dirname + '/public'));
 

app.get('/', function(req, res){
  res.render('/index.html');
});
 

console.log("Multiplayer app listening on port 8080");
*/
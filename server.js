var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    util = require('util'),
    io = require('socket.io')(server),
    Player = require("./player").Player;

var socket,
    players;

//initializing an array of players
function init() {
    players = []
};

init();
socket = io.listen(8080);

console.log("Multiplayer app listening on port 8080");

function events () {
    socket.sockets.on("connection", onSocketConnect);
};

function onSocketConnect () {
    util.log("New player id: " + client.id);
    client.on("disconnect", onPlayerDisconnect);
    client.on("new player", onNewPlayer);
    client.on("move player", onMovePlayer);
};

function onPlayerDisconnect() {
    util.log("Player has disconnected: "+this.id);
};

function onNewPlayer(data) {
    var newPlayer = new Player(data.color, data.direction);
    newPlayer.id = this.id;
    
    //emitting new player to everyone
    this.broadcast.emit("new player", {id: newPlayer.id, body:newPlayer.body});
    //emitting everyone to new player
    var temp_player;
    for(var i = 0; i < players.length; i++) {
        temp_player = players[i];
        this.emit("new player", {id: temp_player.id, body:temp_player.body});
    }
    players.push(newPlayer);
    
};

function onMovePlayer(stuff) {

};





/*socket.configure(function() {
    socket.set("transports", ["websocket"]);
    socket.set("log level", 2);
});
*/





/*
app.use(express.static(__dirname + '/public'));
 

app.get('/', function(req, res){
  res.render('/index.html');
});
 

console.log("Multiplayer app listening on port 8080");
*/
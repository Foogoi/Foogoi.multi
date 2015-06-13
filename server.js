/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Copyright 2015. All Rights Reserved. Permission granted for code use.
 */
var PORT_NUMBER = process.env.PORT || 5000;
var FRAME_RATE = 1000.0 / 60.0;

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', PORT_NUMBER);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public' + req.path);
});

// Server side input handler, modifies the state of the players and the
// game based on the input it receives. Everything runs synchronously with
// the game loop.
io.on('connection', function(socket) {
  // When a new player joins, the server sends his/her unique ID back so
  // for future identification purposes.
  socket.on('new-player', function(data) {
    // Store players
    // @todo for Shantanu
  });

  socket.on('move-player', function(data) {
    game.updatePlayer(socket.id, data.keyboardState, data.turretAngle);
  });
});

/*
// Server side game loop, runs at 60Hz and sends out update packets to all
// clients every tick.
setInterval(function() {
  game.update(io);
}, FRAME_RATE);
*/
http.listen(PORT_NUMBER, function() {
  console.log('Listening to port ' + PORT_NUMBER);
});

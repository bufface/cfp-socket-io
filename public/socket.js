function Socket(playing, gano, reinicie) {
  var self = this;
  var juego = false;

  var socket = io();
  socket.on('connect', function () {
    socket.on('init', function (data) {
      self.juego = data.figure;
    });
  });
}
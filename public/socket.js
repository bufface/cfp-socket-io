function Socket(movimiento, nueva_jugada, reinicie) {
  var self = this;
  var juego = false;

  self.play = function (posicion) {
    socket.emit('nuevo_movimiento', {posicion: posicion});
    movimiento(self.figura(), posicion);
  }

  self.figura = function () {
    if (self.juego) {
      return 'X'
    }

    return 'O';
  }

  var socket = io();
  socket.on('connect', function () {
    socket.on('init', function (data) {
      self.juego = data.figure;
    });

    socket.on('movimiento', function(data) {
      nueva_jugada(data.posicion, data.figura);
    })
  });
}
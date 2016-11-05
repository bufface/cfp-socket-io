var express = require('express');
var socket_io = require('socket.io');

var app = express();
var io = socket_io();
var figure = true;
var posiciones_ocupadas = {};

app.io = io;

io.on('connection', function (socket) {
  socket.emit('init', {figure: figure});
  socket.figure = figure;
  figure = !figure;

  socket.on('nuevo_movimiento', function (data) {
    if (!posiciones_ocupadas[data.posicion]) {
      posiciones_ocupadas[data.posicion] = true;
      io.emit('movimiento', {posicion: data.posicion, figura: socket.figure});
    } else {
      console.log('Alguien tiró en una posicion ocupada');
    }
  });
})

module.exports = app;
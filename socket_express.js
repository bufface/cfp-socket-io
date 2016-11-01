var express = require('express');
var socket_io = require('socket.io');

var app = express();
var io = socket_io();
var figure = true;

app.io = io;

io.on('connection', function (socket) {
  socket.emit('init', {figure: figure});
  socket.figure = figure;
  figure = !figure;

  socket.on('nuevo_movimiento', function (data) {
    io.emit('movimiento', {posicion: data.posicion, figura: socket.figure});
  });
})

module.exports = app;
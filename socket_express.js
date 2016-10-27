var express = require('express');
var socket_io = require('socket.io');

var app = express();
var io = socket_io();

app.io = io;

io.on('connection', function (socket) {
  socket.emit('init', {message: 'Hola Bienvenido.'});
})

module.exports = app;
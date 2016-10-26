var express = require('express');
var socket_io = require('socket.io');

var app = express();
var io = socket_io();

app.io = io;

module.exports = app;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000']
    }
});
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
});
server.listen(4000, () => {
    console.log('listening on *:4000');
});

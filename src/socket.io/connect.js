const express = require("express");
const app = express();
const server = require("http").createServer(app);
const socketIo = require('socket.io');
function socket_logs() {
    const io = socketIo(server);

    io.on('connection', (socket) => {
        console.log('A client has connected.');

        // Handle events from client
        socket.on('message', (data) => {
            console.log('Received message from client:', data);

            // Broadcast the message to all clients
            io.emit('message', data);
        });

        // Handle disconnection
        socket.on('disconnect', () => {
            console.log('A client has disconnected.');
        });
    });

    return io;
}

module.exports = socket_logs;
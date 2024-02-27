const express = require('express');

function socketRouter(io) {
    const router = express.Router();

    // Initialize Socket.IO
    const { initSocket } = require('./socket.controller');
    initSocket(io);

    return router;
}

module.exports = socketRouter;
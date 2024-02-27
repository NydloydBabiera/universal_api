const socketService = require('./socket.service');

function initSocket(io) {
    io.on('connection', (socket) => {
        console.log('A client has connected.');

        // Handle 'message' event
        socket.on('message', (data) => {
            console.log('Received message:', data);

            // Process message using socket service
            socketService.processMessage(data);
        });

        // Handle disconnection
        socket.on('disconnect', () => {
            console.log('A client has disconnected.');
        });
    });
}

module.exports = { initSocket };
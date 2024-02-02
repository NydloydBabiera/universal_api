const socketLogs = ({
    activityLogsDataAccess
}) => {
    return async function fetch(io) {
        io.on('connection', async (socket) => {
            const result = await activityLogsDataAccess.getAllLogs();
            io.emit('logs', result)
            console.log('User connected');

            socket.on('disconnect', () => {
                console.log('User disconnected')
            })

            socket.on('logs', async (data) => {
                console.log("data:", result.rows)
                io.emit('logs', result)

            })
        })
    }
}

module.exports = socketLogs
// data access
const activityLogsDataAccess = require("../data-access/activityLogs")

// logs
const socketLogs = require('./getLogs');

const socket_logs = socketLogs({
    activityLogsDataAccess
})

module.exports = {
    socket_logs
}
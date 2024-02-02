module.exports = function getAllLogsUC({
    activityLogsDataAccess
}) {
    return async function getAllLogs() {
        const result = await activityLogsDataAccess.getAllLogs();
        return result.rows;
    };
};
module.exports = function getCurfewUC({
    activityLogsDataAccess
}) {
    return async function getCurfew() {
        const result = await activityLogsDataAccess.getCurfew();
        return result.rows;
    };
};
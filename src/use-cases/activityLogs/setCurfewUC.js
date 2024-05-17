

module.exports = function setCurfewUC({ activityLogsDataAccess }) {
    return async function setCurfew(curfewDetails) {
        console.log(curfewDetails)
        const result = await activityLogsDataAccess.setCurfewSchedule(curfewDetails)
        return result;
    };
};

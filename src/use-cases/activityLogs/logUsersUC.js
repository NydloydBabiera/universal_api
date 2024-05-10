const moment = require('moment-timezone');

module.exports = function logUsersUC({
  activityLogsDataAccess
}) {
  return async function logUser(logDetails) {
    console.log("logdetails:",logDetails);
    //validation if complete details entities
    let logUser;
    const isLogExist = await activityLogsDataAccess.checkLogsExist(logDetails.userId);
    if (isLogExist.rowCount > 0) {
      logUser = await activityLogsDataAccess.updateUserLogs(logDetails.userId)
    } else {
      const manilaTimezone = 'Asia/Manila';
      logDetails.typeActivity = "DORMLOG";
      logDetails.timePunch  = moment.tz(new Date(), manilaTimezone).format('HH:mm:ss');
      logUser = await activityLogsDataAccess.createUserLogs(logDetails);
    }
    return logUser;
  };
};
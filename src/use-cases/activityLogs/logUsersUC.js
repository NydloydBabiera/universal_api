const moment = require('moment-timezone');

module.exports = function logUsersUC({
  activityLogsDataAccess
}) {
  return async function logUser(logDetails) {
    
    const manilaTimezone = 'Asia/Manila';
    //validation if complete details entities
    let logUser;
    const isLogExist = await activityLogsDataAccess.checkLogsExist(logDetails.userId);
    if (isLogExist.rowCount > 0) {
      logDetails.timePunch = moment.tz(new Date(), manilaTimezone).format('HH:mm:ss');
      logUser = await activityLogsDataAccess.updateUserLogs(logDetails)
    } else {
      logDetails.typeActivity = "DORMLOG";
      logDetails.timePunch  = moment.tz(new Date(), manilaTimezone).format('HH:mm:ss');
      logUser = await activityLogsDataAccess.createUserLogs(logDetails);
    }
    return logUser;
  };
};
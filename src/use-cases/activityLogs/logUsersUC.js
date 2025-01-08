const moment = require("moment-timezone");
const dayjs = require("dayjs");

module.exports = function logUsersUC({ activityLogsDataAccess }) {
  return async function logUser(logDetails) {
    const manilaTimezone = "Asia/Manila";
    //validation if complete details entities
    let logUser;
    const dateToday = await activityLogsDataAccess.getDateToday();
    const isLogExist = await activityLogsDataAccess.checkLogsExist(
      logDetails.userId
    );
    // check if there is schedule within this time

    logDetails.timePunch = moment
      .tz(new Date(), manilaTimezone)
      .format("HH:mm:ss");
    if (isLogExist.rowCount > 0) {
      if (isLogExist.rows[0].log_date != dateToday[0].datetoday) {
        logDetails.dateOut = dateToday[0].datetoday;
        logUser = await activityLogsDataAccess.createUserLogsOut(logDetails);
      } else {
        logDetails.dateOut = dateToday[0].datetoday;
        logUser = await activityLogsDataAccess.updateUserLogs(logDetails);
      }
    } else {
      logDetails.typeActivity = "STUDENT";
      logUser = await activityLogsDataAccess.createUserLogs(logDetails);
    }

    return logUser;
  };
};

const moment = require("moment-timezone");
const dayjs = require("dayjs");

module.exports = function logUsersUC({ activityLogsDataAccess }) {
  return async function logUser(logDetails) {
    const manilaTimezone = "Asia/Manila";
    //validation if complete details entities
    let hasLogged;
    let userRole;
console.log(logDetails)
    const user = await activityLogsDataAccess.getUserByRFID(logDetails.userId)
    console.log(user.rows)
    logDetails.userId = user.rows[0].user_id;
    let logUser;
    const dateToday = await activityLogsDataAccess.getDateToday();
    const isLogExist = await activityLogsDataAccess.checkLogsExist(
      logDetails.userId
    );

    const isSchedExist = await activityLogsDataAccess.isScheduleExist(logDetails.userId, logDetails.room)
    // check if there is schedule within this time
    logDetails.timePunch = moment
      .tz(new Date(), manilaTimezone)
      .format("HH:mm:ss");
      if(isSchedExist.rowCount > 0){
        if (isLogExist.rowCount > 0) {
          logDetails.subject_schedule_id = isSchedExist.rows[0].subject_schedule_id
          logUser = await activityLogsDataAccess.updateUserLogs(logDetails);
        } else {
          logDetails.subject_schedule_id = isSchedExist.rows[0].subject_schedule_id
          // logDetails.typeActivity = "STUDENT";
          logUser = await activityLogsDataAccess.createUserLogs(logDetails);
        }
        userRole = user.rows[0].role_user
        hasLogged = true;
      }
  

    return !userRole ? "N/A" : userRole;
  };
};

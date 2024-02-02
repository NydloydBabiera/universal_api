module.exports = function logUsersUC({
  activityLogsDataAccess
}) {
  return async function logUser(logDetails) {
    //validation if complete details entities
    let logUser;
    const isLogExist = await activityLogsDataAccess.checkLogsExist(logDetails.userId);
    if (isLogExist.rowCount > 0) {
      logUser = await activityLogsDataAccess.updateUserLogs(logDetails.userId)
    } else {

      logDetails.typeActivity = "DORMLOG";
      logUser = await activityLogsDataAccess.createUserLogs(logDetails);
    }
    return logUser;
  };
};
module.exports = function logUsersUC({ userDataAccess }) {
  return async function logUser(logDetails) {
    //validation if complete details entities
    logDetails.typeActivity = "DORMLOG";
    //log user to DB
    const logUser = await userDataAccess.createUserLogs(logDetails);
    return logUser;
  };
};

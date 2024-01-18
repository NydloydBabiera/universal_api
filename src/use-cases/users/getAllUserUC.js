module.exports = function getAllUserUC({ userDataAccess }) {
  return async function getUsers(projectCode) {
    //add new user to DB
    console.log("projectCode:", projectCode);
    let result;
    if (projectCode.toLowerCase() === "dorm") {
      result = await userDataAccess.getGuardianUser();
    }
    if (projectCode.toLowerCase() === "bhw") {
      result = await userDataAccess.getAllUser();
    }

    //validation if complete details entities

    return { data: result.rows };
  };
};

module.exports = function authenticateUserUC({ userDataAccess }) {
  return async function authenticateUser(authDetails) {
    //validation if complete details entities
    let msg;
    let authUser;
    if (
      authDetails.projectCode.toLowerCase() == "dorm" &&
      authDetails.userName != "admin"
    ) {
      authUser = await userDataAccess.loginGuardian(authDetails);
    } else {
      authUser = await userDataAccess.loginUser(authDetails);
    }
    if (authUser.rowCount === 0) {
      msg = "User does not exist or wrong credentials";
    } else {
      msg = "Success!";
    }

    const authData = authUser.rows[0];
    return { msg, authData };
  };
};

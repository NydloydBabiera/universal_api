module.exports = function addUserUC({ userDataAccess }) {
  return async function newUser(userDetails) {
    //validation if complete details entities
    //add new user to DB
    const newUser = await userDataAccess.addNewUser(userDetails.userDetails);
    //add new guardian to DB
    let newGuardian;
    const userId = newUser.rows[0].user_id;

    if (userDetails.projCode == "DORM") {
      userDetails.guardianDetails.userId = userId;
      newGuardian = await userDataAccess.addUserGuardian(
        userDetails.guardianDetails
      );
    }
    let authDetails;
    if (userDetails.projCode == "BHW") {
      const firstChar = userDetails.userDetails.firstName.charAt(0);
      const authenticationDetails = {
        userId: userId,
        userName: firstChar + userDetails.userDetails.lastName,
        passwordUser: firstChar + userDetails.userDetails.lastName,
        roleUser: userDetails.userDetails.roleUser,
        projectCode: userDetails.projCode,
      };
      authDetails = await userDataAccess.createUserAuthentication(
        authenticationDetails
      );
    }

    if (userDetails.projCode == "STUDENT") {
      const firstChar = userDetails.userDetails.firstName.charAt(0);
      const authenticationDetails = {
        userId: userId,
        userName: firstChar + userDetails.userDetails.lastName,
        passwordUser: firstChar + userDetails.userDetails.lastName,
        roleUser: userDetails.userDetails.roleUser,
        projectCode: userDetails.projCode,
      };
      authDetails = await userDataAccess.createUserAuthentication(
        authenticationDetails
      );
    }
    const newUserDetails = newUser.rows[0];
    return {
      message: "Saved successfully!",
      newUserDetails,
      addDetails:
        userDetails.projCode == "DORM"
          ? newGuardian.rows[0]
          : authDetails.rows[0],
    };
  };
};

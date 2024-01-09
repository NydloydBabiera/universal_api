module.exports = function addUserUC({ userDataAccess }) {
  return async function newUser(userDetails) {
    //validation if complete details entities
    console.log("userDetails:", userDetails);
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

    if (userDetails.projCode == "BHW") {
      const firstChar = userDetails.userDetails.first_name.charAt(0);
      const authenticationDetails = {
        userId: userId,
        userName: firstChar + userDetails.userDetails.last_name,
        passwordUser: firstChar + userDetails.userDetails.last_name,
        roleUser: userDetails.userDetails.roleUser,
        projectCode: projCode
      };
    }
    // // const authDetails = await userDataAccess.createUserAuthentication()

    return (newDetails = {
      newUser,
      newGuardian,
    });
  };
};

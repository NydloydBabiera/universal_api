module.exports = function addUserUC({ userDataAccess }) {
  return async function newUser(userDetails) {
    //validation if complete details entities
console.log("userDetails:",userDetails);
    //add new user to DB
    const newUser = await userDataAccess.addNewUser(userDetails.userDetails);
    //add new guardian to DB
    let newGuardian;
   
    if (userDetails.projCode == "DORM") {
      userDetails.guardianDetails.userId = newUser.rows[0].user_id;
      newGuardian = await userDataAccess.addUserGuardian(userDetails.guardianDetails);
    }
    // // const authDetails = await userDataAccess.createUserAuthentication()

    return (newDetails = {
      newUser,
      newGuardian,
    });
  };
};

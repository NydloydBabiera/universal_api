module.exports = function updateUserUC({ userDataAccess }) {
  return async function updateUser(details) {
    const userRes = await userDataAccess.updateUserDetails(details.userDetails);
    let guardianRes;
    if (details.projCode == "DORM") {
      guardianRes = await userDataAccess.updateGuardianDetails(
        details.guardianDetails
      );
    }

    return {
      message: "Updated successfully!",
      userRes,
      guardianRes,
    };
  };
};

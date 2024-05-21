module.exports = function deleteUserUC({ userDataAccess }) {
  return async function deleteUser(userDetails) {
    //validation if complete details entities

    let deleteGuardian;
    let deleteLogs;
    const userId = userDetails.userId;
    console.log(userDetails);
    if (userDetails.projCode == "DORM") {
      //delete guardian row first
      deletelogs = await userDataAccess.deleteLogs(userId);
      deleteGuardian = await userDataAccess.deleteGuardian(userId);
    }

    const deleteUser = await userDataAccess.deleteUser(userId);

    return {
      message: "Deleted successfully!",
    };
  };
};

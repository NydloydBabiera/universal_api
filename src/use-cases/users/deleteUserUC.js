module.exports = function deleteUserUC({ userDataAccess }) {
  return async function deleteUser(userDetails) {
    //validation if complete details entities

    let deleteGuardian;
    const userId = userDetails.userId;
    if (userDetails.projCode == "DORM") {
      //delete guardian row first
      deleteGuardian = await userDataAccess.deleteGuardian(userId);
    }

    const deleteUser = await userDataAccess.deleteUser(userId);

    return {
      message: "Deleted successfully!",
    };
  };
};

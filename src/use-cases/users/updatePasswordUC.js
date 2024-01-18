module.exports = function updatePasswordUC({ userDataAccess }) {
    return async function updatePassword(userDetails) {
      //validation if complete details entities
      //update user password to DB
      const result = await userDataAccess.updatePassword(userDetails);
      
      return {
        message: "Updated successfully!",
        result,
      };
    };
  };
  
module.exports = function authenticateUserUC({ userDataAccess }) {
    return async function authenticateUser(authDetails) {
      //validation if complete details entities
      let msg;
      const authUser = await userDataAccess.loginUser(authDetails)
      if(authUser.rowCount === 0){
        msg = "User does not exist or wrong credentials"
      }else{
        msg = "Success!"
      }
      return msg;
      
    };
  };
  
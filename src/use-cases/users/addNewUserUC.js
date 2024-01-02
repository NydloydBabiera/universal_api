module.exports = function addUserUC({ userDataAccess }) {
    return async function newUser(userDetails) {
        //validation if complete details entities
        
        //add new user to DB
        const newUser = await userDataAccess.addNewUser(userDetails);

        // create user authentication for added user if role is parent
        const authenticationDetails = {
          
        }
        const authDetails = await userDataAccess.createUserAuthentication()


  
      return result;
    };
  };
  
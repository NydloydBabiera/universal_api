module.exports = function addUserUC({ userDataAccess }) {
    return async function newUser(userDetails) {
        //validation if complete details entities
        
        //add new user to DB
        const newUser = await userDataAccess.addNewUser(userDetails);

        // const authDetails = await userDataAccess.createUserAuthentication()


  
      return newUser;
    };
  };
  
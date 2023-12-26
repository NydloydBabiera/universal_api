module.exports = function addUserUC({ userDataAccess }) {
    return async function newUser(userDetails) {
        //validation if complete details entities
        
        //add new user to DB
        const result = await userDataAccess.addNewUser(userDetails);
  
      return result;
    };
  };
  
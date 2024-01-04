module.exports = function getAllUserUC({ userDataAccess }) {
    return async function getUsers() {
    
        //add new user to DB
        const result = await userDataAccess.getAllUser();
        
        //validation if complete details entities

      return result;
    };
  };
  
module.exports = function countUsers({ userDataAccess }) {
    return async function count() {
        //validation if complete details entities
        
        //add new user to DB
        const result = await userDataAccess.countUsers();

        // const authDetails = await userDataAccess.createUserAuthentication()

console.log(result.count)
  
      return result.count;
    };
  };
  
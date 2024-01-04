module.exports = function addGuardianUC({ userDataAccess }) {
    return async function newGuardian(guardianDetails) {
        //validation if complete details entities
        
        //add new user to DB
        const newGuardian = await userDataAccess.addUserGuardian(guardianDetails);

        // const authDetails = await userDataAccess.createUserAuthentication()


  
      return newGuardian;
    };
  };
  
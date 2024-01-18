module.exports = function getAllUserUC({ userDataAccess }) {
  return async function getUsers() {
    //add new user to DB
    const result = await userDataAccess.getAllUser();
    // const userData = result.rows
    // console.log("result:",userData);

    //validation if complete details entities

    return {data: result.rows};
  };
};

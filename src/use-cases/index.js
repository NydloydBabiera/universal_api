const userDataAccess = require("../data-access/users");

//user use-case directory
const addUser = require("./users/addNewUserUC");

// user use-case execution
const addNewUserUC = addUser({
    userDataAccess,
  });

module.exports = {
    addNewUserUC
  };
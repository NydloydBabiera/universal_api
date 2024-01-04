const userDataAccess = require("../data-access/users");

//user use-case directory
const addUser = require("./users/addNewUserUC");
const getUsers = require("./users/getAllUserUC");
const logUser = require("./users/logUsersUC");
const addGuardian = require("./users/addGuardianUC")

// user use-case execution
const addNewUserUC = addUser({
  userDataAccess,
});
const getAllUsersUC = getUsers({ userDataAccess });
const logUserUC = logUser({userDataAccess})
const addGuardianUC = addGuardian({userDataAccess})
module.exports = {
  addNewUserUC,
  getAllUsersUC,
  logUserUC,
  addGuardianUC
};

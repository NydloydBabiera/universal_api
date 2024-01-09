const userDataAccess = require("../data-access/users");

//user use-case directory
const addUser = require("./users/addNewUserUC");
const getUsers = require("./users/getAllUserUC");
const logUser = require("./users/logUsersUC");
const addGuardian = require("./users/addGuardianUC");
const updateUser = require("./users/updateUserUC");
const deleteUser = require("./users/deleteUserUC");

// user use-case execution
const addNewUserUC = addUser({
  userDataAccess,
});
const getAllUsersUC = getUsers({ userDataAccess });
const logUserUC = logUser({ userDataAccess });
const addGuardianUC = addGuardian({ userDataAccess });
const updateUserUC = updateUser({ userDataAccess });
const deleteUserUC = deleteUser({ userDataAccess });

module.exports = {
  addNewUserUC,
  getAllUsersUC,
  logUserUC,
  addGuardianUC,
  updateUserUC,
  deleteUserUC
};

const userDataAccess = require("../data-access/users");
const requestDataAccess = require("../data-access/request");

//user use-case directory
const addUser = require("./users/addNewUserUC");
const getUsers = require("./users/getAllUserUC");
const logUser = require("./users/logUsersUC");
const addGuardian = require("./users/addGuardianUC");
const updateUser = require("./users/updateUserUC");
const deleteUser = require("./users/deleteUserUC");
const authenticateUser = require("./users/authenticateUserUC");
const updatePassword = require("./users/updatePasswordUC");

// request use-case directory
const createRequest = require("./request/createRequestUC");

// user use-case execution
const addNewUserUC = addUser({
  userDataAccess,
});
const getAllUsersUC = getUsers({ userDataAccess });
const logUserUC = logUser({ userDataAccess });
const addGuardianUC = addGuardian({ userDataAccess });
const updateUserUC = updateUser({ userDataAccess });
const deleteUserUC = deleteUser({ userDataAccess });
const authenticateUserUC = authenticateUser({ userDataAccess });
const updatePasswordUC = updatePassword({ userDataAccess });

// request use-case execution
const createRequestUC = createRequest({ requestDataAccess });

module.exports = {
  addNewUserUC,
  getAllUsersUC,
  logUserUC,
  addGuardianUC,
  updateUserUC,
  deleteUserUC,
  authenticateUserUC,
  updatePasswordUC,
  createRequestUC
};

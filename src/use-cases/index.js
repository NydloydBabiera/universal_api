const userDataAccess = require("../data-access/users");
const requestDataAccess = require("../data-access/request");
const activityLogsDataAccess = require("../data-access/activityLogs")

//user use-case directory
const addUser = require("./users/addNewUserUC");
const getUsers = require("./users/getAllUserUC");
const addGuardian = require("./users/addGuardianUC");
const updateUser = require("./users/updateUserUC");
const deleteUser = require("./users/deleteUserUC");
const authenticateUser = require("./users/authenticateUserUC");
const updatePassword = require("./users/updatePasswordUC");

// request use-case directory
const createRequest = require("./request/createRequestUC");
const getAllRequest = require("./request/getAllRequestUC");
const approvalRequest = require("./request/approvalRequestUC");

// activity logs directory
const getAllLogs = require("./activityLogs/getAllLogsUC");
const logUser = require("./activityLogs/logUsersUC");

// user use-case execution
const addNewUserUC = addUser({
  userDataAccess,
});
const getAllUsersUC = getUsers({
  userDataAccess
});

const addGuardianUC = addGuardian({
  userDataAccess
});
const updateUserUC = updateUser({
  userDataAccess
});
const deleteUserUC = deleteUser({
  userDataAccess
});
const authenticateUserUC = authenticateUser({
  userDataAccess
});
const updatePasswordUC = updatePassword({
  userDataAccess
});

// request use-case execution
const createRequestUC = createRequest({
  requestDataAccess
});
const getAllRequestUC = getAllRequest({
  requestDataAccess
});
const approvalRequestUC = approvalRequest({
  requestDataAccess
});

// activity logs use-case execution
const getAllLogsUC = getAllLogs({
  activityLogsDataAccess
})
const logUserUC = logUser({
  activityLogsDataAccess
});
module.exports = {
  addNewUserUC,
  getAllUsersUC,
  logUserUC,
  addGuardianUC,
  updateUserUC,
  deleteUserUC,
  authenticateUserUC,
  updatePasswordUC,
  createRequestUC,
  getAllRequestUC,
  approvalRequestUC,
  getAllLogsUC
};
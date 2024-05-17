const userDataAccess = require("../data-access/users");
const requestDataAccess = require("../data-access/request");
const activityLogsDataAccess = require("../data-access/activityLogs");
const inventoryDataAccess = require("../data-access/inventory");

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
const getUserRequest = require("./request/getUserRequestUC");

// activity logs directory
const getAllLogs = require("./activityLogs/getAllLogsUC");
const logUser = require("./activityLogs/logUsersUC");
const setCurfew = require("./activityLogs/setCurfewUC");

//inventory directory
const getAllStocks = require("./inventory/getAllStocksUC");
const updateStocks = require("./inventory/updateStocksUC");

// user use-case execution
const addNewUserUC = addUser({
  userDataAccess,
});
const getAllUsersUC = getUsers({
  userDataAccess,
});

const addGuardianUC = addGuardian({
  userDataAccess,
});
const updateUserUC = updateUser({
  userDataAccess,
});
const deleteUserUC = deleteUser({
  userDataAccess,
});
const authenticateUserUC = authenticateUser({
  userDataAccess,
});
const updatePasswordUC = updatePassword({
  userDataAccess,
});

// request use-case execution
const createRequestUC = createRequest({
  requestDataAccess,
});
const getAllRequestUC = getAllRequest({
  requestDataAccess,
});
const approvalRequestUC = approvalRequest({
  requestDataAccess,
});
const getUserRequestUC = getUserRequest({ requestDataAccess });

// activity logs use-case execution
const getAllLogsUC = getAllLogs({
  activityLogsDataAccess,
});
const logUserUC = logUser({
  activityLogsDataAccess,
});
const setCurfewUC = setCurfew({ activityLogsDataAccess })

//inventory use-case execution
const getAllStocksUC = getAllStocks({ inventoryDataAccess });
const updateStocksUC = updateStocks({ inventoryDataAccess });

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
  getAllLogsUC,
  getUserRequestUC,
  getAllStocksUC,
  updateStocksUC,
  setCurfewUC
};

const userDataAccess = require("../data-access/users");
const requestDataAccess = require("../data-access/request");
const activityLogsDataAccess = require("../data-access/activityLogs");
const inventoryDataAccess = require("../data-access/inventory");
const subjectDataAccess = require("../data-access/subject");

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
const getCurfew = require("./activityLogs/getCurfewUC");

//inventory directory
const getAllStocks = require("./inventory/getAllStocksUC");
const updateStocks = require("./inventory/updateStocksUC");

// subject directory
const addSubject = require("./subjects/addNewSubjectUC");
const getAllSubjects = require("./subjects/getAllSubjectsUC");
const addSubjectSchedule = require("./subjects/addSubjectSchedule");
const getAllSubjectSchedule = require("./subjects/getAllSubjectSchedule");
const addStudentSubject = require("./subjects/addStudentScheduleUC");
const getStudentSubject = require("./subjects/getStudentSubjectScheduleUC");

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
const setCurfewUC = setCurfew({ activityLogsDataAccess });
const getCurfewUC = getCurfew({ activityLogsDataAccess });

//inventory use-case execution
const getAllStocksUC = getAllStocks({ inventoryDataAccess });
const updateStocksUC = updateStocks({ inventoryDataAccess });

// subject use-case execution
const addNewSubjectUC = addSubject({ subjectDataAccess });
const getAllSubjectUC = getAllSubjects({ subjectDataAccess });
const addSubjectScheduleUC = addSubjectSchedule({ subjectDataAccess });
const getAllSubjectScheduleUC = getAllSubjectSchedule({ subjectDataAccess });
const addStudentSubjectScheduleUC = addStudentSubject({ subjectDataAccess });
const getStudentSubjectScheduleUC = getStudentSubject({ subjectDataAccess });
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
  setCurfewUC,
  getCurfewUC,
  addNewSubjectUC,
  getAllSubjectUC,
  addSubjectScheduleUC,
  getAllSubjectScheduleUC,
  addStudentSubjectScheduleUC,
  getStudentSubjectScheduleUC
};

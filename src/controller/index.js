const {
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
  getStudentSubjectScheduleUC,
  countUsersUC
} = require("../use-cases");

//user controller directory
const addUserControl = require("./users/addNewUserController");
const getAllUserControl = require("./users/getAllUserController");
const addGuardianControl = require("./users/addGuardianController");
const updateUserControl = require("./users/updateGuardianController");
const deleteUserControl = require("./users/deleteUserController");
const authUserControl = require("./users/authenticateUserController");
const updatePasswordControl = require("./users/updatePasswordController");
const countUserControl = require("./users/countUsersController");

// request controller directory
const createRequestControl = require("./request/createRequestController");
const getAllRequestControl = require("./request/getAllRequest");
const approvalRequestControl = require("./request/approvalRequestController");
const getUserRequestControl = require("./request/getUserRequest");

// activity controller directory
const getAllLogsControl = require("./activityLogs/getAllLogsController");
const logUserControl = require("./activityLogs/logUserController");
const setCurfewControl = require("./activityLogs/setCurfewController");
const getCurfewControl = require("./activityLogs/getCurfewController");
//inventory controller directory
const getAllStocksControl = require("./inventory/getAllStocksController");
const updateStocksControl = require("./inventory/updateStocksController");

// subject controller directory
const addNewSubjectControl = require("./subjects/addSubjectController");
const getAllSubjectsControl = require("./subjects/getAllSubjectsController");
const addSubjectScheduleControl = require("./subjects/addSubjectScheduleController");
const getAllSubjectScheduleControl = require("./subjects/getAllSubjectScheduleController");
const addStudentSubjectControl = require("./subjects/addStudentSubjectScheduleController");
const getStudentSubjectScheduleControl = require("./subjects/getStudentSubjectScheduleController");

//user controller execution
const addUserController = addUserControl({
  addNewUserUC,
});
const getAllUserController = getAllUserControl({
  getAllUsersUC,
});
const logUserController = logUserControl({
  logUserUC,
});
const addGuardianController = addGuardianControl({
  addGuardianUC,
});
const updateUserController = updateUserControl({
  updateUserUC,
});
const deleteUserController = deleteUserControl({
  deleteUserUC,
});
const authUserController = authUserControl({
  authenticateUserUC,
});
const updatePasswordController = updatePasswordControl({
  updatePasswordUC,
});
const countUserController = countUserControl({ countUsersUC })

// request controller execution
const createRequestController = createRequestControl({
  createRequestUC,
});
const getAllRequestController = getAllRequestControl({
  getAllRequestUC,
});
const approvalRequestController = approvalRequestControl({
  approvalRequestUC,
});
const getUserRequestController = getUserRequestControl({ getUserRequestUC });

// activity logs execution
const getAllLogsController = getAllLogsControl({
  getAllLogsUC,
});
const setCurfewController = setCurfewControl({ setCurfewUC });
const getCurfewController = getCurfewControl({ getCurfewUC });

//inventory execution
const getAllStocksController = getAllStocksControl({ getAllStocksUC });
const updateStocksController = updateStocksControl({ updateStocksUC });

// subject execution
const addSubjectController = addNewSubjectControl({ addNewSubjectUC });
const getAllSubjectsController = getAllSubjectsControl({ getAllSubjectUC });
const addSubjectScheduleController = addSubjectScheduleControl({
  addSubjectScheduleUC,
});
const getAllSubjectScheduleController = getAllSubjectScheduleControl({
  getAllSubjectScheduleUC,
});

const addStudentSubjectController = addStudentSubjectControl({
  addStudentSubjectScheduleUC,
});

const getStudentSubjectScheduleController = getStudentSubjectScheduleControl({
  getStudentSubjectScheduleUC,
});

module.exports = {
  addUserController,
  getAllUserController,
  logUserController,
  addGuardianController,
  updateUserController,
  deleteUserController,
  authUserController,
  updatePasswordController,
  createRequestController,
  getAllRequestController,
  approvalRequestController,
  getAllLogsController,
  getUserRequestController,
  getAllStocksController,
  updateStocksController,
  setCurfewController,
  getCurfewController,
  addSubjectController,
  getAllSubjectsController,
  addSubjectScheduleController,
  getAllSubjectScheduleController,
  addStudentSubjectController,
  getStudentSubjectScheduleController,
  countUserController
};

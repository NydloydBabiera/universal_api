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
} = require("../use-cases");

//user controller directory
const addUserControl = require("./users/addNewUserController");
const getAllUserControl = require("./users/getAllUserController");
const logUserControl = require("./users/logUserController");
const addGuardianControl = require("./users/addGuardianController");
const updateUserControl = require("./users/updateGuardianController");
const deleteUserControl = require("./users/deleteUserController");
const authUserControl = require("./users/authenticateUserController");
const updatePasswordControl = require("./users/updatePasswordController");

// request controller directory
const createRequestControl = require("./request/createRequestController");

//user controller execution
const addUserController = addUserControl({
  addNewUserUC,
});
const getAllUserController = getAllUserControl({ getAllUsersUC });
const logUserController = logUserControl({ logUserUC });
const addGuardianController = addGuardianControl({ addGuardianUC });
const updateUserController = updateUserControl({ updateUserUC });
const deleteUserController = deleteUserControl({ deleteUserUC });
const authUserController = authUserControl({ authenticateUserUC });
const updatePasswordController = updatePasswordControl({ updatePasswordUC });

// request controller execution
const createRequestController = createRequestControl({ createRequestUC });

module.exports = {
  addUserController,
  getAllUserController,
  logUserController,
  addGuardianController,
  updateUserController,
  deleteUserController,
  authUserController,
  updatePasswordController,
  createRequestController
};

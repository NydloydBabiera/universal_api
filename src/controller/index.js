const {
  addNewUserUC,
  getAllUsersUC,
  logUserUC,
  addGuardianUC,
  updateUserUC,
  deleteUserUC,
} = require("../use-cases");

//user controller directory
const addUserControl = require("./users/addNewUserController");
const getAllUserControl = require("./users/getAllUserController");
const logUserControl = require("./users/logUserController");
const addGuardianControl = require("./users/addGuardianController");
const updateUserControl = require("./users/updateGuardianController");
const deleteUserControl = require("./users/deleteUserController");

//user controller execution
const addUserController = addUserControl({
  addNewUserUC,
});
const getAllUserController = getAllUserControl({ getAllUsersUC });
const logUserController = logUserControl({ logUserUC });
const addGuardianController = addGuardianControl({ addGuardianUC });
const updateUserController = updateUserControl({ updateUserUC });
const deleteUserController = deleteUserControl({ deleteUserUC });

module.exports = {
  addUserController,
  getAllUserController,
  logUserController,
  addGuardianController,
  updateUserController,
  deleteUserController
};

const { addNewUserUC, getAllUsersUC, logUserUC,addGuardianUC } = require("../use-cases");

//user controller directory
const addUserControl = require("./users/addNewUserController");
const getAllUserControl = require("./users/getAllUserController");
const logUserControl = require("./users/logUserController");
const addGuardianControl = require("./users/addGuardianController")
//user controller execution
const addUserController = addUserControl({
  addNewUserUC,
});
const getAllUserController = getAllUserControl({ getAllUsersUC });
const logUserController = logUserControl({ logUserUC });
const addGuardianController = addGuardianControl({addGuardianUC})
module.exports = {
  addUserController,
  getAllUserController,
  logUserController,
  addGuardianController
};

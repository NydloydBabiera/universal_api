const { addNewUserUC } = require("../use-cases");

//user controller directory
const addUserControl = require("./users/addNewUserController");

//user controller execution
const addUserController = addUserControl({
  addNewUserUC,
});

module.exports = {
  addUserController,
};

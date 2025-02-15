const express = require("express");
const {
  route
} = require("..");
const router = express.Router();

const {
  addUserController,
  getAllUserController,
  logUserController,
  addGuardianController,
  updateUserController,
  deleteUserController,
  authUserController,
  updatePasswordController,
  countUserController
} = require("../controller");
const makeExpressCallback = require("../express-callback");
router.post("/addUser", makeExpressCallback(addUserController));
router.get("/getAllUser/:id", makeExpressCallback(getAllUserController));
router.post("/addGuardian", makeExpressCallback(addGuardianController));
router.put("/updateUser/:id", makeExpressCallback(updateUserController));
router.delete("/deleteUser/:id", makeExpressCallback(deleteUserController));
router.post("/authenticate", makeExpressCallback(authUserController));
router.put("/updatePassword", makeExpressCallback(updatePasswordController));
router.get("/countUser", makeExpressCallback(countUserController));
module.exports = router;
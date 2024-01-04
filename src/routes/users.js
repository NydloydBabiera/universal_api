const express = require("express");
const {
    route
} = require("..");
const router = express.Router();

const {
    addUserController,
    getAllUserController,
    logUserController,
    addGuardianController
} = require("../controller")
const makeExpressCallback = require("../express-callback");

router.post("/addUser", makeExpressCallback(addUserController));
router.get("/getAllUser", makeExpressCallback(getAllUserController));
router.post("/logUser", makeExpressCallback(logUserController));
router.post("/addGuardian", makeExpressCallback(addGuardianController));
module.exports = router;
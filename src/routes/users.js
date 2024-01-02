const express = require("express");
const {
    route
} = require("..");
const router = express.Router();

const {
    addUserController,
} = require("../controller")
const makeExpressCallback = require("../express-callback");

router.post("/addUser", makeExpressCallback(addUserController));
module.exports = router;
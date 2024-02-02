const express = require("express");
const {
    route
} = require("..");
const router = express.Router();

const {
    getAllLogsController,
    logUserController
} = require("../controller");
const makeExpressCallback = require("../express-callback");
router.get("/getAllLogs", makeExpressCallback(getAllLogsController));
router.post("/logUser", makeExpressCallback(logUserController));
module.exports = router;
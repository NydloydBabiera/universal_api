const express = require("express");
const {
    route
} = require("..");
const router = express.Router();

const {
    getAllLogsController,
    logUserController,
    setCurfewController,
    getCurfewController
} = require("../controller");
const makeExpressCallback = require("../express-callback");
router.get("/getAllLogs", makeExpressCallback(getAllLogsController));
router.post("/logUser", makeExpressCallback(logUserController));
router.post("/curfewSched", makeExpressCallback(setCurfewController));
router.get("/getCurfewSched", makeExpressCallback(getCurfewController));
module.exports = router;
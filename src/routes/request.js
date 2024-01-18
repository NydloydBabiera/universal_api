const express = require("express");
const { route } = require("..");
const router = express.Router();

const { createRequestController } = require("../controller");
const makeExpressCallback = require("../express-callback");
router.post("/createRequest", makeExpressCallback(createRequestController));
module.exports = router;

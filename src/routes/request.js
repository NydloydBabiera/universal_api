const express = require("express");
const { route } = require("..");
const router = express.Router();

const { createRequestController,getAllRequestController } = require("../controller");
const makeExpressCallback = require("../express-callback");
router.post("/createRequest", makeExpressCallback(createRequestController));
router.get("/getAllRequest", makeExpressCallback(getAllRequestController));
module.exports = router;

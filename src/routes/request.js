const express = require("express");
const { route } = require("..");
const router = express.Router();

const { createRequestController,getAllRequestController, approvalRequestController } = require("../controller");
const makeExpressCallback = require("../express-callback");
router.post("/createRequest", makeExpressCallback(createRequestController));
router.get("/getAllRequest", makeExpressCallback(getAllRequestController));
router.put("/approvalRequest/:id", makeExpressCallback(approvalRequestController));
module.exports = router;

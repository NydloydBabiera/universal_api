const express = require("express");
const { route } = require("..");
const router = express.Router();

const { getAllStocksController, updateStocksController } = require("../controller");
const makeExpressCallback = require("../express-callback");
router.get("/allStocks", makeExpressCallback(getAllStocksController));
router.put("/updateStocks", makeExpressCallback(updateStocksController));
module.exports = router;

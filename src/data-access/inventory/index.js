const Pool = require("pg").Pool;
const inventoryActions = require("./inventoryActions.js");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
});

const inventoryDataAccess = inventoryActions({ pool });

// module.exports = { empDataAccess, transDataAccess };
module.exports = inventoryDataAccess;

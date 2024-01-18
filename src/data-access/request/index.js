const Pool = require("pg").Pool;
const requestActions = require("./requestActions.js");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
});

const requestDataAccess = requestActions({ pool });

module.exports = requestDataAccess;

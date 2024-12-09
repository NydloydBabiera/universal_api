const Pool = require("pg").Pool;
const subjectActions = require("./subjectActions.js");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
});

const requestDataAccess = subjectActions({ pool });

module.exports = requestDataAccess;

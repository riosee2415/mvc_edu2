const mysql2 = require("mysql2");

const db = mysql2.createPool({
  port: "3306",
  host: "localhost",
  user: "root",
  password: "fourleaf0309!!",
  database: "SCOTT",
});

module.exports = db;

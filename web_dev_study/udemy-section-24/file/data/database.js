const mysql = require("mysql2/promise");

const pool = mysql.createPool({
   host: "localhost", // for local server like our pc
   database: "blog",
   user: "root",
   password: "CSE123",
});

module.exports = pool;

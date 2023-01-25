const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "node_mysql_crud_db",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = conn;

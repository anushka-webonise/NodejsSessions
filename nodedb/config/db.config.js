const mysql = require("mysql");
// create here mysql connection
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "tryapis",
  password: "webonise123#",
  database: "testapis",
  port: "3306",
});
dbConn.connect(function (error) {
  if (error) throw error;
  console.log("Database Connected Successfully!!!");
});
module.exports = dbConn;

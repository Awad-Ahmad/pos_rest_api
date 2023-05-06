const mysql = require("mysql2");
exports.connectToDb = () => {
  connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: "",
  });
  connection.query(
    `CREATE DATABASE IF NOT EXISTS pos_rest_api`,
    function (err, result) {
      if ((err, result)) {
        if (err) {
          console.log(err.message);
        }
      }
    }
  );
};

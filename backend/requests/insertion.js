const mysql = require("mysql2");

var con = mysql.createConnection({
  database: "hc",
  host: "localhost",
  user: "root",
  password: "admin",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});

function insertTemperature(data) {
  var sql = `INSERT INTO temp (date, valeur) VALUES ('${new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ")}', ${data})`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted into temperature");
  });
}
function insertFrequence(data) {
    var sql = `INSERT INTO freq (date, valeur) VALUES ('${new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ")}', ${data})`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted into frequence");
    });
  }

  function inserto2(data) {
    var sql = `INSERT INTO o2 (date, valeur) VALUES ('${new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ")}', ${data})`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted into oxygene");
    });
  }

  function insertSteps(data) {
    var sql = `INSERT INTO act (date, valeur) VALUES ('${new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ")}', ${data})`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted into steps");
    });
  }

  function insertPression(data) {
    var sql = `INSERT INTO press (date, valeur) VALUES ('${new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ")}', ${data})`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted into pression");
    });
  }
module.exports = {
  insertTemperature,
  inserto2,
  insertFrequence,
  insertPression,
  insertSteps
};

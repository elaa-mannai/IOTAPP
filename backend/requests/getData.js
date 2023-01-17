const mysql = require("mysql2");

var con = mysql.createConnection({
  database: "hc",
  host: "localhost",
  user: "root",
  password: "admin",
});

/* con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});
 */
var express = require('express');
var router = express.Router();

router.get('/getAlltemp', function getAlltemp (req, res, next) {
  var sql = 'select * from temp order by id desc';
  con.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('getAlltemp', {title: 'temp list', messages: data});
  });
});
     function getAlltemp(res) {
      con.query( `select * from temp order by id desc`, function (err, result) {
        if (err) throw err;
        console.log("all temp", result);
      });
    } 
  
  

 
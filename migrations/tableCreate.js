const mysql = require("mysql");
const config = require("../config");

let con = mysql.createConnection(config.db);

con.connect(function (err) {
  if (err) throw err;
  console.log("Its alive !");
  con.query(
    "CREATE TABLE IF NOT EXISTS users(id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, username varchar(40), password varchar(50), age TINYINT)",
    function (err) {
    if (err) throw err;
    console.log("Table created");
 

  
  });
});




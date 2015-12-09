var mysql = require("mysql");

// First you need to create a connection to the db
var dbConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Vulcun"
});

dbConnect.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


dbConnect.query(
  "LOAD DATA INFILE '/Users/Kentou/git/challenges/Vulcun_challenge_part_1/dataWithId.csv' INTO TABLE users FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS;", function (err, row) {
    if (err) {
      console.log("LOAD ERROR - ", err);
    } else {
      console.log("LOADED INTO DB");
    }
  }
);

dbConnect.query (
  "SELECT * FROM users WHERE full_name LIKE '%john%'", function (err, row) {
    if (err) {
      console.log("Query Error - ", err);
    } else {
      console.log("Query worked");
    }
});

dbConnect.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

module.exports = dbConnection;


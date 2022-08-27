import mysql from 'mysql';
//const dbConfig = require("../config/db.config.js");

// Create a connection to the database
export const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root2",
    password: "#Password2",
    port: "3306",
    database: "bookdb"
});

// open the MySQL connection
conn.connect( (err) => {
    if (err) throw err;
    console.log("Successfully connected to the database.");
});
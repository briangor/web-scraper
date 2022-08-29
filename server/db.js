import mysql from 'mysql';
import dotenv  from "dotenv";
import { config }  from './config.js';
dotenv.config();
 
export const conn = mysql.createConnection(config.db);

// connect to db
conn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

export const getBooks = (req, res) => {
  conn.query('SELECT * FROM books', (err, data) => {
    if (err) throw err;
    res.json(data);
  }); 
  return res;
}

export const getBookById = (req, res) => {
  conn.query('SELECT * FROM books WHERE ?', (err, data) => {
    if (err) throw err;
    res.json(data);
  }); 
  return res;
}

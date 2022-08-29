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
  if (!req.params.id) {
    //("No book id found", 404);
    throw err;
  }
  conn.query('SELECT * FROM books WHERE id = ?',  [req.params.id], (err, data) => {
    if (err) throw err;
    res.status(200).json(data);
  }); 
  return res;
}

import mysql from 'mysql';
import dotenv  from "dotenv";
dotenv.config();
 
export const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.PORT,
  database: process.env.DB
});

// connect 
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

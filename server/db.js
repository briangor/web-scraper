import mysql from 'mysql';

export const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root2",
  password: "#Password2",
  port: "3306",
  database: "bookdb"
});

// connect 
conn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

export const books = (req, res) => {
  
  conn.query('SELECT * FROM books', (err, data) => {
    if (err) throw err;
    res.json(data);
  }); 
  return res;
}
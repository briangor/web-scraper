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
  console.log("Database Connected! ");
});

export const books = (req, res) => {
  
  conn.query('SELECT * FROM books', (err, data) => {
    if (err) throw err;
    // res.status(200).json({
    //   status: "success",
    //   data: data,
    // });
    res.json(data);
  });
  return res;
}



// end connection
// conn.end(err => {});

// function (err, data, fields) {
//   if (err) return next(new AppError(err, 500));
//   res.status(200).json({
//     status: "success",
//     length: data?.length,
//     data: data,
//   });
// }
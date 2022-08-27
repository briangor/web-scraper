import { conn } from './db.js';

// constructor
export const Book = function(book) {
  this.name = book.name;
  this.price = book.price;
//   this.created = book.created_at;
//   this.updated = book.updated_at;
};

Book.findById = (id, result) => {
    sql.query(`SELECT * FROM books WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found book: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Book with the id
      result({ kind: "not_found" }, null);
    });
  };
  Book.getAll = (name, result) => {
    let query = "SELECT * FROM books";
    if (name) {
      query += ` WHERE name LIKE '%${name}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("names: ", res);
      result(null, res);
    });
  };

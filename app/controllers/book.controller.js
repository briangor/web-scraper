import { Book } from './../models/book.model';

exports.findAll = (req, res) => {
    const title = req.query.title;
    Book.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving books."
        });
      else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Book.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found book with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving book with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};
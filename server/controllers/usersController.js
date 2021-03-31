const db = require("../model/databaseModel");
const bcyrpt = require("bcrypt");

const usersController = {};

usersController.newUser = (req, res, next) => {
  const { userName, password } = req.body;

  const saltRounds = 10;
  bcyrpt
    .hash(password, saltRounds)
    .then((result) => {
      const str =
        "INSERT INTO users (user_name, password) VALUES ($1, $2) RETURNING *";
      db.query(str, [userName, result])
        .then((data) => {
          res.locals.entry = data.rows;
          return next();
        })
        .catch((err) => next(err)); // catch for dbQuery
    })
    .catch((err) => next(err)); // catch for bcrypt.hash;
};

module.exports = usersController;

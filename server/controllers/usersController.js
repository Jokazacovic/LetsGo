const db = require('../model/databaseModel');
const bcrypt = require('bcrypt');

const usersController = {};

usersController.newUser = (req, res, next) => {
  const { username, password } = req.body;

  const saltRounds = 10;
  bcrypt
    .hash(password, saltRounds)
    .then((result) => {
      const str =
        'INSERT INTO users (user_name, password) VALUES ($1, $2) RETURNING *';
      db.query(str, [username, result])
        .then((data) => {
          res.cookie('user_id', data.rows[0]._id);
          return next();
        })
        .catch((err) => next(err)); // catch for dbQuery
    })
    .catch((err) => next(err)); // catch for bcrypt.hash;
};

usersController.login = (req, res, next) => {
  const { username, password } = req.body;
  const getUser = `select * from users where user_name='${username}'`;
  db.query(getUser)
    .then((result) => {
      console.log('LINE 30 RAN ', result);
      bcrypt
        .compare(password, result.rows[0].password)
        .then((bcryptResult) => {
          if (bcryptResult) {
            // set uid in the session
            res.cookie('user_id', result.rows[0]._id);
            return next();
          }
          // throw 'wrong email or password';
          else {
            console.log('NOOOOOOOOOOOOOO');
          }
        })
        .catch((err) => {
          console.log('error in bcrypt compare!!!!!!!!!!: ', err);
          return next(err);
        });
    })
    .catch((err) => {
      console.log('error in login query?????????????', err);
      return next(err);
    });
};

module.exports = usersController;

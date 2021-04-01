const path = require('path');
const cors = require('cors');
const express = require('express');
const { v4: uuid } = require('uuid');
const app = express();
const usersController = require('./controllers/usersController');
const itineraryController = require('./controllers/itineraryController');

// parse data to json
app.use(cors());
app.use(express.json());

// serve static data
app.use(express.static(path.resolve(__dirname, '../client')));

app.use(
  session({
    genid: function (req) {
      return uuid(); // use UUIDs for session IDs
    },
    secret: 'dogs and cats',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.post('/user', usersController.newUser, (req, res) => {
  console.log('added user', res.locals.entry);
  return res.sendStatus(200);
});

app.post(
  '/itinerary',
  itineraryController.yelpInfo,
  itineraryController.dbStore,
  (req, res) => {
    return res.sendStatus(200);
  }
);

// catch all for invalid path
app.use('*', (req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = '3000';
app.listen(PORT, () => console.log('Listening on port 3000'));

// app.get("/user", userController.login, (req, res) => {
//   console.log(res.locals.entry);
//   return res.status(200).sendFile("./frontend/app");
// });

/*
app.get('/itinerary', (req, res) => {
  console.log(req.body)
});
*/

// app.post('/itinerary', (req, res) => {
//   console.log(req.body);
//   res.sendStatus(200);
// });

// app.post('/idk', (req, res) => {
//   console.log('request body:', req.body);
//   return res.sendStatus(200);
// });

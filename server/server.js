const path = require('path');
const cors = require('cors');
const express = require('express');
const { v4: uuid } = require('uuid');
const session = require('express-session');
const app = express();
var cookieParser = require('cookie-parser');
const usersController = require('./controllers/usersController');
const itineraryController = require('./controllers/itineraryController');

// parse data to json
app.use(cookieParser());
app.use(cors());
app.use(express.json());

// serve static data
app.use(express.static(path.resolve(__dirname, '../client')));

// app.use(
//   session({
//     genid: function (req) {
//       return uuid(); // use UUIDs for session IDs
//     },
//     secret: 'LetsGo',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false },
//   })
// );

// handle creating new user
app.post('/createUser', usersController.newUser, (req, res) => {
  return res.status(200).json(res.locals.user_id);
});

// handle existing user login
app.post('/user', usersController.login, (req, res) => {
  return res.status(200).json(res.locals.user_id);
});

// handle get requests to see all itineraries associated with logged in user
app.get('/itinerary', itineraryController.getItinerary, (req, res) => {
  return res.status(200).json(res.locals.yelp);
});

// handle creating a new itinerary
app.post('/itinerary', itineraryController.yelpInfo, itineraryController.dbStore, (req, res) => {
    return res.sendStatus(200);
});

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

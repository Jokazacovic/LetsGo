const path = require('path');
const express = require('express');
const { dirname } = require('path');
const app = express();
const usersController = require('./controllers/usersController');
//const itineraryController = require("./controllers/itineraryController");

// parse data to json
app.use(express.json());

// serve static data
app.use(express.static(path.resolve(__dirname, '../client')));

app.post('/user', usersController.newUser, (req, res) => {
  console.log(res.locals.entry);
  return res.sendStatus(200);
});

// app.get("/user", userController.login, (req, res) => {
//   console.log(res.locals.entry);
//   return res.status(200).sendFile("./frontend/app");
// });

/*
app.get('/itinerary', (req, res) => {
  console.log(req.body)
});
*/

app.post('/itinerary', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

// app.delete('/itinerary', (req, res) => {
// })

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

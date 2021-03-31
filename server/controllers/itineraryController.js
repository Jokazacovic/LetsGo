const db = require('../model/databaseModel');
const axios = require('axios');

// bring in our YelpAPIKey
const { yelpAPIKey } = require('../../config');

const itineraryController = {};

// set header info for our API request
let yelpREST = axios.create({
  baseURL: 'https://api.yelp.com/v3/',
  headers: {
    Authorization: `Bearer ${yelpAPIKey}`,
    'Content-type': 'application/json',
  },
});

itineraryController.addDay = (req, res, next) => {
  const { location, date, radius, budget } = req.body;

  const arts = req.body['Arts & Entertainment'];
  const active = req.body['Active Life'];
  console.log('HERES THE REQUEST BODY', req.body);

  const firstObj = {
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Hotels: false,
    Nighlife: false,
    Shopping: false,
  };

  for (let el in firstObj) {
    //if (el !== location || date || radius || budget && req.body[el] !== false) {
    if (req.body[el] !== false) {
      yelpREST('/businesses/search', {
        params: {
          location: location,
          radius: radius,
          budget: budget,
          limit: 1,
          categories: el,
        },
      })
        .then(({ data }) => {
          console.log('line 47', el, data);
          firstObj[el] = data;
        })
        .catch((err) => console.log('this is error', err));
    }
  }
  console.log('FIRSTOBJ:', firstObj);

  // yelpREST('/businesses/search', {
  //   params: { location: location, limit: 3 },
  // })
  //   .then(({ data }) => {
  //     console.log(data);
  //     next();
  //   })
  //   .catch((err) => console.log('this is error', err));
  return first;
};

module.exports = itineraryController;
BLOC;

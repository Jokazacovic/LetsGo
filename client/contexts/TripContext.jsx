import React, { createContext, useState } from 'react';

export const TripContext = createContext();

export const TripContextProvider = (props) => {
  const [tripInfo, setTripInfo] = useState(
    [
      4, // user ID
      {
        _id: 1,
        date: '2020-05-30',
        radius: 200,
        location: 'Portland',
        budget: '$$',
        Breakfast: {
          rating: 4,
          price: '$',
          phone: '+14152520800',
          id: 'E8RJkjfdcwgtyoPMjQ_Olg',
          alias: 'four-barrel-coffee-san-francisco',
          is_closed: false,
          categories: [
            {
              alias: 'coffee',
              title: 'Coffee & Tea',
            },
          ],
          review_count: 1738,
          name: 'Four Barrel Coffee',
          url: 'https://www.yelp.com/biz/four-barrel-coffee-san-francisco',
          coordinates: {
            latitude: 37.7670169511878,
            longitude: -122.42184275,
          },
          image_url: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
          location: {
            city: 'San Francisco',
            country: 'US',
            address2: '',
            address3: '',
            state: 'CA',
            address1: '375 Valencia St',
            zip_code: '94103',
          },
          distance: 1604.23,
          transactions: ['pickup', 'delivery'],
        },
        Lunch: {
          rating: 4,
          price: '$',
          phone: '+14152520800',
          id: 'E8RJkjfdcwgtyoPMjQ_Olg',
          alias: 'four-barrel-coffee-san-francisco',
          is_closed: false,
          categories: [
            {
              alias: 'coffee',
              title: 'Coffee & Tea',
            },
          ],
          review_count: 1738,
          name: 'Four Barrel Coffee',
          url: 'https://www.yelp.com/biz/four-barrel-coffee-san-francisco',
          coordinates: {
            latitude: 37.7670169511878,
            longitude: -122.42184275,
          },
          image_url: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
          location: {
            city: 'San Francisco',
            country: 'US',
            address2: '',
            address3: '',
            state: 'CA',
            address1: '375 Valencia St',
            zip_code: '94103',
          },
          distance: 1604.23,
          transactions: ['pickup', 'delivery'],
        },
        Dinner: false,
        Hotels: false,
        Active: false,
        Arts: false,
        Nightlife: false,
        Shopping: false,
      },
      { location: 'somewhere else', date: '2012-12-21' },
    ]
  );

  return <TripContext.Provider value={[tripInfo, setTripInfo]}>{props.children}</TripContext.Provider>;
};

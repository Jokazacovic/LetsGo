import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TripContext } from '../contexts/TripContext';
import Trip from './tripPage';
import LoadingPage from "./LoadingPage";


export default function Landing(props) {
  // Pull state into component from TripContext using 'useContext' hook
  const [tripInfo, setTripInfo] = useContext(TripContext);
  const [loading, setLoading] = useState(true);

  console.log('TRIPINFO:', tripInfo);

  useEffect(() => {
    fetch(`http://localhost:3000/itinerary/${tripInfo[0]}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // Coordinate with backend for fetch response data
        // console.log(res)
        setLoading(false);
        setTripInfo(res);
      })
      .catch((err) => console.log('error has occurred in Fetching TripInfo'));
  }, []);

  // const newState = [
  //   {
  //     _id: 1,
  //     date: '2020-05-30',
  //     radius: 200,
  //     location: 'Portland',
  //     budget: '$$',
  //     Breakfast: {
  //       rating: 4,
  //       price: '$',
  //       phone: '+14152520800',
  //       id: 'E8RJkjfdcwgtyoPMjQ_Olg',
  //       alias: 'four-barrel-coffee-san-francisco',
  //       is_closed: false,
  //       categories: [
  //         {
  //           alias: 'coffee',
  //           title: 'Coffee & Tea',
  //         },
  //       ],
  //       review_count: 1738,
  //       name: 'Four Barrel Coffee',
  //       url: 'https://www.yelp.com/biz/four-barrel-coffee-san-francisco',
  //       coordinates: {
  //         latitude: 37.7670169511878,
  //         longitude: -122.42184275,
  //       },
  //       image_url: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
  //       location: {
  //         city: 'San Francisco',
  //         country: 'US',
  //         address2: '',
  //         address3: '',
  //         state: 'CA',
  //         address1: '375 Valencia St',
  //         zip_code: '94103',
  //       },
  //       distance: 1604.23,
  //       transactions: ['pickup', 'delivery'],
  //     },
  //     Lunch: {
  //       rating: 4,
  //       price: '$',
  //       phone: '+14152520800',
  //       id: 'E8RJkjfdcwgtyoPMjQ_Olg',
  //       alias: 'four-barrel-coffee-san-francisco',
  //       is_closed: false,
  //       categories: [
  //         {
  //           alias: 'coffee',
  //           title: 'Coffee & Tea',
  //         },
  //       ],
  //       review_count: 1738,
  //       name: 'Four Barrel Coffee',
  //       url: 'https://www.yelp.com/biz/four-barrel-coffee-san-francisco',
  //       coordinates: {
  //         latitude: 37.7670169511878,
  //         longitude: -122.42184275,
  //       },
  //       image_url: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
  //       location: {
  //         city: 'San Francisco',
  //         country: 'US',
  //         address2: '',
  //         address3: '',
  //         state: 'CA',
  //         address1: '375 Valencia St',
  //         zip_code: '94103',
  //       },
  //       distance: 1604.23,
  //       transactions: ['pickup', 'delivery'],
  //     },
  //     Dinner: false,
  //     Hotels: false,
  //     Active: false,
  //     Arts: false,
  //     Nightlife: false,
  //     Shopping: false,
  //   }
  // ];

  // useEffect(() => {
  //       // setLoading(false);
  //       setTripInfo(newState);
  //     }, []);


   // if loading, ask for a state change
   if (loading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  const eachTrip = tripInfo.slice(1).map((element, index) => (
    <div className="eachTrip">
      <p>
        Location:
        {element.location}
      </p>
      <p>
        Date:
        {element.date}
      </p>
      <Link to={`/trip/${index}`} children={<Trip key={index} />}>
        <button type="button">View Trip Details</button>
      </Link>
    </div>
  ));
  return (
    <div>
      <Link to="/input">
        <button type="button">Create a new itinerary</button>
      </Link>
      <div className="trip-container">
        {eachTrip}
      </div>
    </div>
  );
}

import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TripContext } from '../contexts/TripContext';
import Trip from './tripPage';

export default function Landing(props) {
  // Pull state into component from TripContext using 'useContext' hook
  const [tripInfo, setTripInfo] = useContext(TripContext);

  // fetch data from db and setTripInfo
  useEffect(() => {
    fetch('/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // Coordinate with backend for fetch response data
        setTripInfo(res);
      })
      .catch((err) => console.log('error has occurred in Fetching TripInfo'));
  });

  const eachTrip = tripInfo.map((element, index) => (
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

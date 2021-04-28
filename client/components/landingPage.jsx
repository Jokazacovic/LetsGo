import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TripContext } from '../contexts/TripContext';
import Trip from './tripPage';
import LoadingPage from './LoadingPage';

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

  // if loading, ask for a state change
  if (loading) {
    return (
      <div className='landing'>
        <LoadingPage />
      </div>
    );
  }

  const eachTrip = tripInfo.slice(1).map((element, index) => (
    <div className='eachTrip'>
      <p>
        Location:
        {element.location}
      </p>
      <p>
        Date:
        {element.date.slice(0, 10).padStart(11, ' ')}
      </p>
      <Link to={`/trip/${index}`} children={<Trip key={index} />}>
        <button type='button' className='landing-button'>
          View Trip Details
        </button>
      </Link>
    </div>
  ));
  return (
    <div className='landing'>
      <Link to='/input'>
        <button className='landing-button' type='button'>
          Create a new itinerary
        </button>
      </Link>
      <div className='trip-container'>{eachTrip}</div>
    </div>
  );
}

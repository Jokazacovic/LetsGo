import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TripContext } from '../contexts/TripContext';

export default function Trip(props) {
  const { index } = useParams();
  // Pull state into component from TripContext using 'useContext' hook
  const [tripInfo, setTripInfo] = useContext(TripContext);
  const trip = tripInfo[index]; // object
  const {
    location, date, radius, budget,
  } = trip;

  const handleDelete = (e) => {
    const tripDelete = trip._id;
    fetch('/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tripDelete),
    })
      .then((res) => res.json())
      .then(() => {
        const { history } = this.props;
        history.push('/landing');
      })
      .catch((err) => console.log('error has occurred in Fetching LoginInfo'));
  };

  const activities = ['Breakfast', 'Lunch', 'Dinner', 'Hotels', 'Active', 'Arts', 'Nightlife', 'Shopping'];
  const result = activities.map((activity) => {
    if (trip[activity]) {
      const {
        name, url, rating, price, phone, image_url, categories,
      } = trip[activity];

      let category = '';
      categories.forEach((element) => { category += `${element.title}, `; });
      category = category.slice(0, category.length - 2);

      const {
        city, country, address2, address3, state, address1, zip_code,
      } = trip[activity].location;

      return (
        <div style={{ border: '2px solid pink' }}>
          <div className={activity}>
            <h3>{activity}</h3>
          </div>
          <div className="placeInfo">
            <span>
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
              <a>
                Rating:
                {rating}
                /5
              </a>
            </span>
            <br />
            <span>
              <a>{price}</a>
              <a> • </a>
              <a>{category}</a>
            </span>
            <p>{phone}</p>
            <p>{address1}</p>
            <p>{address2}</p>
            <p>{address3}</p>
            <p>
              {city}
              ,
              {' '}
              {state}
              {' '}
              {zip_code}
            </p>
          </div>
          <div>
            <img src={image_url} style={{ width: '50vw' }} />
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      <h2>
        {location}
        ,
        {' '}
        {date}
        ,
        {' '}
        {Math.ceil(radius / 1609)}
        mi,
        {' '}
        {budget}
      </h2>
      <button className="delete" type="button" onClick={handleDelete}>Delete Trip</button>
      {result}
    </div>
  );
}

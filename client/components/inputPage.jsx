import React, { Component, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { TripContext } from '../contexts/TripContext';
3
export default function InputFor() {
  let history = useHistory();
  const [tripInfo, setTripInfo] = useContext(TripContext);
  const [input, setInput] = useState({
    location: '',
    date: '2021-04-01',
    radius: 1600,
    budget: '$',
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Hotels: false,
    'Active Life': false,
    'Arts & Entertainment': false,
    Nightlife: false,
    Shopping: false,
  });

  // onClick functionality for submit button
  function handleClick(e) {
    console.log('THIS IS INPUT', input);
    const vals = Object.values(input);
    let sendForm = false;
    // check state for checkboxes with 'true' values
    vals.forEach((ele) => {
      if (ele.toString() === 'true') sendForm = true;
    });
    // if at least one activity is checked, fetch POST request
    if (sendForm) {
      const body = {
        ...input,
        user_id: tripInfo[0],
      };
      fetch('http://localhost:3000/itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then(() => {
          // const { history } = this.props;
          history.push('/landing');
        })
        .catch((err) => console.log('error has occurred in Fetching'));
    } else {
      alert('Check at least one activity!');
    }
  }

  // onChange handlers for Location and Date with inputted value
  function changeHandler(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  // onChange handlers for checkboxes
  function forCheckList(e) {
    const property = e.target.name;
    if (input[property]) {
      setInput({
        ...input,
        [property]: false,
      });
    } else {
      setInput({
        ...input,
        [property]: true,
      });
    }
  }
  // Map Pre-Determined Yelp Categories to React Checkboxes
  const lists = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Hotels',
    'Active Life',
    'Arts & Entertainment',
    'Nightlife',
    'Shopping',
  ];
  const checkLists = lists.map((element) => (
    <div>
      <label>
        <input
          name={element}
          type='checkbox'
          defaultChecked={input[element]}
          onChange={forCheckList}
        />
        {element}
      </label>
    </div>
  ));

  return (
    <div className="input-background">
    <div className='addDay'>
      <form action='' className='dayForm'>
        <div className='Location'>
          <label className='cardFormLabel'>Location</label>
          <input
            type='text'
            className='cardFormInput'
            name='location'
            onChange={changeHandler}
            required
          />
        </div>
        <div className='Date'>
          <form className='date' noValidate>
            <TextField
              id='date'
              type='date'
              defaultValue='2021-04-01'
              InputLabelProps={{
                shrink: true,
              }}
              name='date'
              onChange={changeHandler}
            />
          </form>
        </div>
        <div className='radius'>
          <select name='radius' onChange={changeHandler}>
            <option selected value={1600}>
              {' '}
              Walking (1mi)
            </option>
            <option value={3200}> Biking (2mi) </option>
            <option value={8000}>Driving (5mi)</option>
            <option value={16000}>Driving (10mi)</option>
          </select>
        </div>
        <div className='budget'>
          <select name='budget' onChange={changeHandler}>
            <option selected value='$'>
              $
            </option>
            <option value='$$'>$$</option>
            <option value='$$$'>$$$</option>
            <option value='$$$$'>$$$$</option>
          </select>
        </div>
        {checkLists}
      </form>
      <button className='addDayBtn' type='button' onClick={handleClick}>
        Create a New Trip
      </button>
     </div>
    </div>
  );
}

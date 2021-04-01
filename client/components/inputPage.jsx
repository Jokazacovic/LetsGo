import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.forCheckList = this.forCheckList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // onClick functionality for submit button
  handleClick(e) {
    const vals = Object.values(this.state);
    let sendForm = false;
    // check state for checkboxes with 'true' values
    vals.forEach((ele) => {
      if (ele.toString() === 'true') sendForm = true;
    });
    // if at least one activity is checked, fetch POST request
    if (sendForm) {
      fetch('http://localhost:3000/idk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
        .then((res) => res.json())
        .then(() => {
          const { history } = this.props;
          history.push('/landing');
        })
        .catch((err) =>
          console.log('error has occurred in Fetching this.state')
        );
    } else {
      alert('Check at least one activity!');
    }
  }

  // onChange handlers for Location and Date with inputted value
  changeHandler(e) {
    this.setState((state) => ({
      [e.target.name]: e.target.value,
    }));
  }

  // onChange handlers for checkboxes
  forCheckList(e) {
    const property = e.target.name;
    if (this.state[property]) {
      this.setState({
        [property]: false,
      });
    } else {
      this.setState({
        [property]: true,
      });
    }
  }

  render() {
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
            defaultChecked={this.state[element]}
            onChange={this.forCheckList}
          />
          {element}
        </label>
      </div>
    ));

    return (
      <div className='addDay'>
        <form action='' className='dayForm'>
          <div className='Location'>
            <label className='cardFormLabel'>Location</label>
            <input
              type='text'
              className='cardFormInput'
              name='location'
              onChange={this.changeHandler}
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
                onChange={this.changeHandler}
              />
            </form>
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
                onChange={this.changeHandler}
              />
            </form>
          </div>
          <div className='radius'>
            <select name='radius' onChange={this.changeHandler}>
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
            <select name='budget' onChange={this.changeHandler}>
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
        <button className='addDayBtn' type='button' onClick={this.handleClick}>
          Create a New Trip
        </button>
      </div>
    );
  }
}
// categories:
// Hotels & Travel (hotelstravel, All)
// active life (active, All)
// arts & entertainment (arts, All)
// beauty & spas (beautysvc, All)
// Local Flavor (localflavor, All)
// Nightlife (nightlife, All)
// Shopping (shopping, All)
export default Input;

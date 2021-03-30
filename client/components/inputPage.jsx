/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Location : '',
      Date: '',

    };
  }

  render() {
    const lists = ['Breakfast', 'Lunch', 'Dinner', 'Hotels', 'Active Life', 'Arts & Entertainment', 'Nightlife', 'Shopping'];
    const checkLists = lists.map((element) => (
      <div>
        <label>
          <input name={element} type="checkbox" />
          {element}
        </label>
      </div>
    ));

    return (
      <div className="addDay">
        <form action="" className="dayForm">
          <div className="Location">
            <label className="cardFormLabel">Location</label>
            <input type="text" className="cardFormInput" />
          </div>
          <div className="Data">
          <DatePicker selected={startdate} onChange={date => setStartDate(date)} />
          </div>
          <div className="radius">
            <select>
              <option selected value="Walking"> Walking(1mi)</option>
              <option value="Biking"> Biking(2mi) </option>
              <option value="Driving5">Driving(5mi)</option>
              <option value="Driving10">Driving(10mi)</option>
            </select>
          </div>
          <div className="budget">
            <select>
              <option selected value="$">$</option>
              <option value="$$"> $$ </option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
            </select>
          </div>
          {checkLists}
        </form>
        <button className="addDayBtn" type="button">Create a New Trip</button>
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

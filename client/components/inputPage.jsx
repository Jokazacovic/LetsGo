import React from 'react';

export default function Input(props) {
  
  const handleChange = () => {

  };
  
  const handleClick = () => {
  };

  return (
    <div className="addDay">
      <form action="" className="dayForm">
        <div className="location">
          <label className="cardFormLabel">Location</label>
          <input type="text" className="cardFormInput" />
        </div>
        <div className="date">
          <label className="cardFormLabel">Date</label>
          <input type="text" className="cardFormInput" />
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
          {/* <label className="cardFormLabel">Budget</label>
          <input type="text" className="cardFormInput" /> */}
          <select>
            <option selected value="Walking">$</option>
            <option value="Biking"> $$ </option>
            <option value="Driving5">$$$</option>
            <option value="Driving10">$$$$</option>
          </select>
        </div>
        <label>
          Food
          <br />
          <input
            name="breakfast"
            type="checkbox"
          />
          Breakfast & Brunch
        </label>
        <br />
        <label>
          <input
            name="lunch"
            type="checkbox"
          />
          Lunch
        </label>
        <br />
        <label>
          <input
            name="dinner"
            type="checkbox"
          />
          Dinner
        </label>
        <br />
        <label>
          Activity
          <br />
          <input
            name="hotels"
            type="checkbox"
          />
          Hotels
        </label>
        <br />
        <label>
          <input
            name="activeLife"
            type="checkbox"
          />
          Active Life
        </label>
        <br />
        <label>
          <input
            name="entertainment"
            type="checkbox"
          />
          Arts & Entertainment
        </label>
        {/* <br /> */}
        {/* <label>
          <input
            name="beauty"
            type="checkbox"
          />
          Beauty & Spas
        </label> */}
        {/* <br />
        <label>
          <input
            name="localFlavor"
            type="checkbox"
          />
          Local Flavor
        </label> */}
        <br />
        <label>
          <input
            name="nightlife"
            type="checkbox"
          />
          Nightlife
        </label>
        <br />
        <label>
          <input
            name="shopping"
            type="checkbox"
          />
          Shopping
        </label>
        <br />
      </form>
      <button className="addDayBtn" type="button">Create a New Trip</button>
    </div>
  );
}

// categories:
// Hotels & Travel (hotelstravel, All)
// active life (active, All)
// arts & entertainment (arts, All)
// beauty & spas (beautysvc, All)
// Local Flavor (localflavor, All)
// Nightlife (nightlife, All)
// Shopping (shopping, All)

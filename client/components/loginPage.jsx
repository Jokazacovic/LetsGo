import React, { useState, useContext } from 'react';
import { TripContext } from '../contexts/TripContext';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Pull state into component from TripContext using 'useContext' hook
  const [tripInfo, setTripInfo] = useContext(TripContext);

  function submitLoginInfo(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then(() => {
        const { history } = this.props;
        history.push('/landing');
      })
      .catch((err) => console.log('error has occurred in Fetching LoginInfo'));
  }

  return (
    <div className="login-background">
      <div className="login-container">
        <h2 className="login">Login</h2>
        <input className="login-input" type="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="login-input" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <div>
          <button className="login-buttons" type="button" onClick={submitLoginInfo}>Login</button>
          <button className="login-buttons" type="button" onClick={submitLoginInfo}>Create Account</button>
        </div>
      </div>
    </div>
  );
}

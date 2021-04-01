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
        <h2>Login</h2>
        <input type="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <div className="login-buttons">
          <button type="button" onClick={submitLoginInfo}>Login</button>
          <button type="button" onClick={submitLoginInfo}>Create Account</button>
        </div>
      </div>
    </div>
  );
}

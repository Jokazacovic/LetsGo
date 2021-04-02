import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TripContext } from '../contexts/TripContext';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Pull state into component from TripContext using 'useContext' hook
  const [tripInfo, setTripInfo] = useContext(TripContext);
  let history = useHistory();

  function submitLoginInfo(e) {
    e.preventDefault();
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTripInfo([res]);
      })
      .then(() => {
        history.push('/landing');
      })
      .catch((err) =>
        console.log('error has occurred in Fetching LoginInfo: ', err)
      );
  }

  function createUser(e) {
    e.preventDefault();
    fetch('http://localhost:3000/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTripInfo([res]);
      })
      .then(() => {
        history.push('/landing');
      })
      .catch((err) =>
        console.log('error has occurred in Fetching LoginInfo: ', err)
      );
  }

  return (
    <div className='login-background'>
      <div className='login-container'>
        <h2 className='login'>Login</h2>
        <form>
          <input
            className='login-input'
            type='username'
            name='username'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className='login-input'
            type='password'
            name='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </form>
        <div>
          <button
            className='login-buttons'
            type='button'
            onClick={submitLoginInfo}
          >
            Login
          </button>
          <button className='login-buttons' type='button' onClick={createUser}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

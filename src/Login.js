// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file
import './Welcome.css';
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      console.log('Login successful', response.data);

      setLoginError('');
      onLogin(email); // Trigger the login action and pass the email
    } catch (error) {
      console.error('Login failed', error.response.data);

      setLoginError('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {loginError && <p className="error">{loginError}</p>}
    </div>
  );
};

export default Login;



// App.js

import React, { useState, useEffect } from 'react';
import Login from './Login';
import Welcome from './Welcome';
import './App.css'; // Import the CSS file

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Update body class when isLoggedIn changes
    document.body.className = isLoggedIn ? 'after-login' : 'before-login';
  }, [isLoggedIn]);

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Welcome email={userEmail} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;



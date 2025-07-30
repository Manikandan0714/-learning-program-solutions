import React, { useState } from 'react';
import Guest from './components/Guest';
import User from './components/User';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    const name = prompt("Enter your name:", "John");
    if (name) {
      setUsername(name);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header>
        <h1>✈️ React Ticket Booking App</h1>
        <div className="auth">
          {!isLoggedIn ? (
            <button onClick={handleLogin}>Login</button>
          ) : (
            <>
              <span>Welcome, {username}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </header>

      <main>
        {isLoggedIn ? <User username={username} /> : <Guest />}
      </main>
    </div>
  );
}

export default App;

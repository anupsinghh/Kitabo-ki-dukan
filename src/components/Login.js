import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Get the navigate function
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login clicked. Username:', username, 'Password:', password);

    // Perform your login logic here

    // Assuming login is successful, redirect to the homepage
    navigate('/');
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin} className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

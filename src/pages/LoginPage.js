// pages/LoginPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div style={{ paddingTop: '40px' }}>
      <h1>Login Page</h1>
      <Login />
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default LoginPage;

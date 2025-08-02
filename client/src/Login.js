// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // reuse same styles

function Login({ onLoginSuccess }) {
  const [inputs, setInputs] = useState({ email: '', password: '' });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/login', inputs);
      if (res.data.success) {
        const userName = res.data.name;
        // console.log('Logging in as:', userName); // debug
        onLoginSuccess(userName); // passes name to App.js
      }
       else {
        alert('Invalid credentials');
      }
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

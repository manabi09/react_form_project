import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';  // <-- this line imports your styles

function Register({ switchToLogin }) {
  const [inputs, setInputs] = useState({
    name: '',
    contact: '',
    email: '',
    dob: '',
    address: '',
    password: ''
  });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://backend-ias0.onrender.com/register', inputs);
      alert(res.data.message);
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className='form-container'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact No:</label>
          <input type="text" name="contact" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
      <button onClick={switchToLogin} style={{ marginTop: '10px' }}>Go to Login</button>
    </div>
  );
}

export default Register;

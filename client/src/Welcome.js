// src/Welcome.js
import React from 'react';

function Welcome({ name }) {
 // console.log('Welcome page name:', name); // debug
  return (
    <div className="form-container">
      <h2>Welcome, {name}!</h2>
      <p>You have successfully logged in.</p>
    </div>
  );
}


export default Welcome;

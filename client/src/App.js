import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  const [page, setPage] = useState('register'); // 'login', 'welcome'
  const [userName, setUserName] = useState('');

  return (
    <>
      {page === 'register' && (
        <Register switchToLogin={() => setPage('login')} />
      )}

      {page === 'login' && (
        <Login onLoginSuccess={(name) => {
         // console.log('Received name in App:', name); // debug
          setUserName(name);
          setPage('welcome');
        }} />        
      )}

      {page === 'welcome' && <Welcome name={userName} />}
    </>
  );
}

export default App;

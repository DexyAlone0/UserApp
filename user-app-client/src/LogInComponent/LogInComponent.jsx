// LoginComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { click } from '@testing-library/user-event/dist/click';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://localhost:7007/LogIn', {
        params: {
          Email: email,
          Password: password,
        },
      });

      const isLoggedIn = response.data; 
      if(isLoggedIn){
        alert("GİRİŞ BAŞARILI");
      }
      else{
      alert("GİRİŞ BAŞARISIZ");
    }
      console.log('Login successful:', isLoggedIn);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;

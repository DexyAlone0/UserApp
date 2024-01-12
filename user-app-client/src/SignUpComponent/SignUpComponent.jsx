// SignupComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SignupComponent = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const apiUrl = 'https://localhost:7007/SignUp'; // API'nizin URL'sini buraya ekleyin

      const userObject = {
        Email: email,
        Name: name,
        LastName: lastName,
        Password: password,
      };

      const response = await axios.post(apiUrl, userObject);

      // Handle the response, maybe show a success message or redirect
      console.log('Signup successful:', response.data);

    } catch (error) {
      console.error('Signup failed:', error);

      // Handle errors, show error message or redirect to an error page
      console.error('Error response:', error.response);

      // Eğer API'den gelen bir hata varsa, error.response objesini kullanabilirsiniz.
      // Örneğin: console.log('Error message:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupComponent;

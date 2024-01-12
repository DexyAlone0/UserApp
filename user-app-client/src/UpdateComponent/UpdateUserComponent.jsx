// UpdateUser.jsx
import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [userUpdateModel, setUserUpdateModel] = useState({
    id: '',
    identityNumber: '',
    email: '',
    name: '',
    lastName: '',
    password: '',
    // Diğer gerekli alanlar...
  });

  const handleUpdate = async () => {
    try {
      const apiUrl = 'https://localhost:7007/UpdateUser';

      const response = await axios.put(apiUrl, userUpdateModel);

      console.log('User updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <label>ID:</label>
      <input
        type="text"
        placeholder="ID"
        value={userUpdateModel.id}
        onChange={(e) => setUserUpdateModel({ ...userUpdateModel, id: e.target.value })}
      />
      <label>IdentityNumber:</label>
      <input
        type="text"
        placeholder="IdentityNumber"
        value={userUpdateModel.identityNumber}
        onChange={(e) => setUserUpdateModel({ ...userUpdateModel, identityNumber: e.target.value })}
      />
      <label>Email:</label>
      <input
        type="text"
        placeholder="Email"
        value={userUpdateModel.email}
        onChange={(e) => setUserUpdateModel({ ...userUpdateModel, email: e.target.value })}
      />
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name"
        value={userUpdateModel.name}
        onChange={(e) => setUserUpdateModel({ ...userUpdateModel, name: e.target.value })}
      />
      <label>Last Name:</label>
      <input
        type="text"
        placeholder="Last Name"
        value={userUpdateModel.lastName}
        onChange={(e) => setUserUpdateModel({ ...userUpdateModel, lastName: e.target.value })}
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={userUpdateModel.password}
        onChange={(e) => setUserUpdateModel({ ...userUpdateModel, password: e.target.value })}
      />
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
};

export default UpdateUser;

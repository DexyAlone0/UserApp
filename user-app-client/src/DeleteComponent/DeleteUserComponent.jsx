import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      const apiUrl = `https://localhost:7007/DeleteUser/${id}`;
      const response = await axios.delete(apiUrl);

      console.log('User deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <label>ID:</label>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default DeleteUser;

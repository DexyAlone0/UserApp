// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './LogInComponent/LogInComponent';
import SignupComponent from './SignUpComponent/SignUpComponent';
import UpdateUser from './UpdateComponent/UpdateUserComponent';
import DeleteUser from './DeleteComponent/DeleteUserComponent';
import StudentCrud from './Modal';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path='/update' element={<UpdateUser/ >} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/delete" element={<DeleteUser />} />
          <Route path="/modal" element={<StudentCrud />} />

          
          {/* Diğer sayfaları ekleyebilirsiniz */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

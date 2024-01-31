import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/UserTypeSelection.css'
//import './UserTypeSelection.css'; // Import the CSS file

const UserTypeSelection = ({ onSelectUserType }) => {
  const [userType, setUserType] = useState('user');

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };

  const handleContinue = () => {
    onSelectUserType(userType);
  };

  return (
    <div className="user-type-container">
      <h2> Select User Type</h2>
      <div>
        <Link to="/LoginForm">
          <center>
          <button
            style={{ backgroundColor: "crimson" }}
            className={userType === 'user' ? 'active' : ''}
            onClick={() => handleUserTypeSelect('user')}
          >
            User
          </button>
          </center>
          <br></br>
        </Link>
        
        <Link to="/AdminLoginForm">
          <center>
          <button
            style={{ backgroundColor: "crimson" }}
            className={userType === 'admin' ? 'active' : ''}
            onClick={() => handleUserTypeSelect('admin')}
          >
            Admin
          </button>
          </center>
        </Link>
        <br></br>
      </div>
    </div>
  );
};

export default UserTypeSelection;

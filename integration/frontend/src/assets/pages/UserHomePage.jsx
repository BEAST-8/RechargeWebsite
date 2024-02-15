import React from 'react';
import '../assets/css/UserHomePage.css';
// import Navbar from './Navbar';
import UserSidebar from './UserSidebar';
//import userImage from '../assets/images/user-image.jpg'; // Assuming you have the user image file

const UserHomePage = () => {
  return (
    <div className='side'>
      <UserSidebar />

      <div className="user-home-container">
        <div className="user-header">
          {/* <Navbar /> */}
          <h2>Welcome, User!</h2>
        </div>
        <div className="user-content">
          <strong>
            Welcome to Mobile Recharge. Here, you can find personalized
            information and features tailored just for you.
          </strong>
          <strong>
            Recharge and Pay bills Instantaly.
            You can recharge your mobile online and get cashbacks!          </strong>
            <br></br>
         
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;

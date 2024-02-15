import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/UserSidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Link to="/">Recharge App</Link>
      </div>
      <nav className="nav-links">
        {/* <Link to="/dashboard">Dashboard</Link> */}
        <Link to="/UserProfilePage">Profile</Link>
       
        
        
      </nav>
    </aside>
  );
};

export default Sidebar;

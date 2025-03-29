import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";

export default function Navbar({ toggleSidebar }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <nav className="navbar">
      
      <button className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      
      <h2 className="navbar-title">
        <img src="/resollect_logo.jpeg" alt="Logo" className="navbar-logo" />
      </h2>
      <div className="profile-container">
        <button className="profile-btn" onClick={toggleDropdown}>
          <FaUserCircle size={20} /> Shaurya Tiwari
        </button>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}
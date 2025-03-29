import React from "react";

export default function Sidebar({ selectedPage, setSelectedPage, isSidebarOpen, toggleSidebar }) {
  const menuItems = [
    "Dashboard",
    "Portfolio",
    "Notifications",
    "Notices",
    "Auction",
    "Data Upload",
    "Control Panel",
    "User Management",
    "Permissions",
  ];

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
      
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={selectedPage === item ? "active" : ""}
            onClick={() => {
              setSelectedPage(item);
              
              if (window.innerWidth <= 768) {
                toggleSidebar();
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="powered-by">
        <p>Powered by Resollect</p>
      </div>
    </aside>
  );
}
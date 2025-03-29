export default function Sidebar({ selectedPage, setSelectedPage }) {
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
      <aside className="sidebar">
        
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={selectedPage === item ? "active" : ""}
              onClick={() => setSelectedPage(item)} 
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
  
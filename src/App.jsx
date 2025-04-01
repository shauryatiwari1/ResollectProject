import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Table from "./components/table";
import UploadDoc from "./components/uploaddoc";
import AddDataForm from "./components/adddataform";

import "./styles.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPage, setSelectedPage] = useState("Portfolio");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModeDarkened, setIsModeDarkened] = useState(false);
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://resollect-project-jlfb.onrender.com/loans")
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const toggleMode = () => {
    setIsModeDarkened(!isModeDarkened);
  };
    
  const addData = async (newLoan) => {
    try {
      const response = await fetch("https://resollect-project-jlfb.onrender.com/loans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLoan),
      });
      
      if (!response.ok) {
        throw new Error("Failed to add data");
      }
      
      const addedLoan = await response.json();
      setData([...data, addedLoan]);
      
      setIsAddFormOpen(false);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    // below line defines the look of UI in different themes and mobile responsiveness
    <div className={`app-container ${isSidebarOpen ? 'sidebar-active' : ''} ${isModeDarkened ? 'dark-mode' : ''}`}>
      
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} 
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      
      <div className="container">
        <Sidebar 
          selectedPage={selectedPage} 
          setSelectedPage={setSelectedPage} 
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        
        <div className="main-content">
          {selectedPage === "Portfolio" ? (
            <>
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                setIsUploadOpen={setIsUploadOpen}
                isModeDarkened={isModeDarkened}
                toggleMode={toggleMode}
              />
              
              <div className="tabless">
                {selectedFilter === "Pre Sarfaesi" ? (
                  <div className="tablessed">
                    <div className="filters">
                      <button className="filter-btn">Generate Pre Sarfaesi Notice</button>
                      <button className="filter-btn">Declare NPA</button>
                      
                    </div>
                    <Table searchQuery={searchQuery} data={data} />
                  </div>
                ) : (
                  <div>
                    <Table searchQuery={searchQuery} data={data} />
                    <div className="addingnew">
                      <button className="filter-btn" onClick={() => setIsAddFormOpen(true)}>Add Data</button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="no-content">No Content Available for {selectedPage}</div>
          )}
        </div>
      </div>
      
      {isUploadOpen && <UploadDoc setIsUploadOpen={setIsUploadOpen} />}
      {isAddFormOpen && <AddDataForm onClose={() => setIsAddFormOpen(false)} onSubmit={addData} />}
    </div>
  );
}
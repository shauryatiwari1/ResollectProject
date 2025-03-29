import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Table from "./components/table";
import UploadDoc from "./components/uploaddoc";
import AddDataForm from "./components/adddataform"; 
import "./index.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPage, setSelectedPage] = useState("Portfolio");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false); 
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:5000/loans") 
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  
  const addData = async (newLoan) => {
    try {
      const response = await fetch("http://localhost:5000/loans", {
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

  return (
    <div className="app-container">
      <Navbar />

      <div className="container">
        <Sidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

        <div className="main-content">
          {selectedPage === "Portfolio" ? (
            <>
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                setIsUploadOpen={setIsUploadOpen}
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

export default function Header({ searchQuery, setSearchQuery, selectedFilter, setSelectedFilter, setIsUploadOpen }) {
    return (
      <header className="header">
        <div className="titled">
          <h2>Portfolio</h2>
        </div>
        
        <div className="filters">
          <button className={`filter-btn ${selectedFilter === "All" ? "active" : ""}`} onClick={() => setSelectedFilter("All")}>All</button>
          <button className={`filter-btn ${selectedFilter === "Pre Sarfaesi" ? "active" : ""}`} onClick={() => setSelectedFilter("Pre Sarfaesi")}>Pre Sarfaesi</button>
          <button className="filter-btn">NPA</button>
          <button className="filter-btn">Symbolic Possession</button>
          <button className="filter-btn">DM Order</button>
          <button className="filter-btn">Physical Possessions</button>
          <button className="filter-btn">Auctions</button>
        </div>

        <div className="justcornering">
            <button className="more-filters">More Filters</button>
            <button className="more-filters" onClick={() => setIsUploadOpen(true)}>Upload Document</button>
        </div>

        <input
          type="text"
          className="search-bar"
          placeholder="Search Borrower Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>
    );
}

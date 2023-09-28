import React, { useState } from "react";
import "./Styles/DashboardSearchBar.css";
const DashboardSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <>
      <div className="body_top">
<<<<<<< HEAD
        <h1>Welcome Vishal</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for apps "
            value={query}
            onChange={handleInputChange}
          />
          <button className="searchButton" onClick={handleSearch}>
            Search
          </button>
=======
        <p className="body_p">Welcome Vishal!</p>
        <div className="search-bar">
        <div class="input-container">
            <img class="imgs" src="./search.png" alt="img" />
            <input
          type="text"
           placeholder="Search for apps"
           value={query}
           onChange={handleInputChange}
          />
        </div>
          
>>>>>>> origin/master
        </div>
      </div>
    </>
  );
};

export default DashboardSearchBar;

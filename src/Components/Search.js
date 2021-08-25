import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <input
        value={searchInput}
        type="search"
        className="search"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Link to={`/search/${searchInput}`}>
        <button className="searchButton" onClick={() => setSearchInput("")}>
          🔎
        </button>
      </Link>
    </div>
  );
}

export default Search;

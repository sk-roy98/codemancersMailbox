import React, { useState } from "react";
import "./Search.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Search() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <input
        type="search"
        className="search"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Link to={`/search/${searchInput}`}>
        <button className="searchButton">🔎</button>
      </Link>
    </div>
  );
}

export default Search;

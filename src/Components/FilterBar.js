import React from "react";
import { Link } from "react-router-dom";
import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="filters">
      <Link
        to="/inbox"
        className="filterButtons"
        style={{ backgroundColor: "#32A853", textDecoration:"none", fontWeight:"bold", color:"#333" }}
      >
        Inbox
      </Link>

      <Link
        to="/all"
        className="filterButtons"
        style={{ backgroundColor: "#3F87F6", textDecoration:"none", fontWeight:"bold", color:"#333" }}
      >
        All
      </Link>

      <Link
        to="/draft"
        className="filterButtons"
        style={{ backgroundColor: "#F9BD05", textDecoration:"none", fontWeight:"bold", color:"#333" }}
      >
        Draft
      </Link>

      <Link
        to="/spam"
        className="filterButtons"
        style={{ backgroundColor: "#EA4436", textDecoration:"none", fontWeight:"bold", color:"#333" }}
      >
        Spam
      </Link>
      
      <Link
        to="/trash"
        className="filterButtons"
        style={{ backgroundColor: "#C4241E", textDecoration:"none", fontWeight:"bold", color:"#333" }}
      >
        Trash
      </Link>
    </div>
  );
}

export default FilterBar;

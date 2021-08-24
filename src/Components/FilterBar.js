import React from "react";
import { Link } from "react-router-dom";
import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="filters">
      <Link
        to="/inbox"
        className="filterButtons"
        style={{ backgroundColor: "#32A853" }}
      >
        Inbox
      </Link>

      <Link
        to="/all"
        className="filterButtons"
        style={{ backgroundColor: "#3F87F6" }}
      >
        All
      </Link>

      <Link
        to="/draft"
        className="filterButtons"
        style={{ backgroundColor: "#F9BD05" }}
      >
        Draft
      </Link>

      <Link
        to="/spam"
        className="filterButtons"
        style={{ backgroundColor: "#EA4436" }}
      >
        Spam
      </Link>
      
      <Link
        to="/trash"
        className="filterButtons"
        style={{ backgroundColor: "#C4241E" }}
      >
        Trash
      </Link>
    </div>
  );
}

export default FilterBar;

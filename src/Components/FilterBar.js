import React from "react";
import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="filters">
      <button className="filterButtons" style={{ backgroundColor: "#3F87F6" }}>
        All
      </button>
      <button className="filterButtons" style={{ backgroundColor: "#32A853" }}>
        Inbox
      </button>
      <button className="filterButtons" style={{ backgroundColor: "#F9BD05" }}>
        Draft
      </button>
      <button className="filterButtons" style={{ backgroundColor: "#EA4436" }}>
        Spam
      </button>
      <button className="filterButtons" style={{ backgroundColor: "#C4241E" }}>
        Trash
      </button>
    </div>
  );
}

export default FilterBar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./FilterBar.css";

function FilterBar() {
  const path = useLocation().pathname;
  return (
    <div className="filters">
      <Link
        to="/inbox"
        className="filterButtons"
        style={{
          backgroundColor: "#32A853",
          textDecoration: "none",
          fontWeight: "bold",
          color: "#333",
          borderBottom:
            path === "/inbox" || path === "/" ? "3px solid #bfb" : "none",
        }}
      >
        Inbox
      </Link>

      <Link
        to="/all"
        className="filterButtons"
        style={{
          backgroundColor: "#3F87F6",
          textDecoration: "none",
          fontWeight: "bold",
          color: "#333",
          borderBottom: path === "/all" ? "3px solid #bbf" : "none",
        }}
      >
        All
      </Link>

      <Link
        to="/draft"
        className="filterButtons"
        style={{
          backgroundColor: "#F9BD05",
          textDecoration: "none",
          fontWeight: "bold",
          color: "#333",
          borderBottom: path === "/draft" ? "3px solid #fea" : "none",
        }}
      >
        Draft
      </Link>

      <Link
        to="/spam"
        className="filterButtons"
        style={{
          backgroundColor: "#EA4436",
          textDecoration: "none",
          fontWeight: "bold",
          color: "#333",
          borderBottom: path === "/spam" ? "3px solid #fbb" : "none",
        }}
      >
        Spam
      </Link>

      <Link
        to="/trash"
        className="filterButtons"
        style={{
          backgroundColor: "#C4241E",
          textDecoration: "none",
          fontWeight: "bold",
          color: "#333",
          borderBottom: path === "/trash" ? "3px solid #f77" : "none",
        }}
      >
        Trash
      </Link>
    </div>
  );
}

export default FilterBar;

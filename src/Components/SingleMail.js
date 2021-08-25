import React from "react";
import "./SingleMail.css";
import { Link } from "react-router-dom";

function SingleMail({ mail, key }) {
  return (
    <Link
      to={`/mail/${mail.id}`}
      style={{ width: "100%", textDecoration: "none" }}
    >
      <div className="singleMail" key={key}>
        <div className="profile">{mail.userId}</div>
        <div className="filterOptions">
          <select name="filterDropdown" id="filters">
            <option value="inbox">Inbox</option>
            <option value="draft">Draft</option>
            <option value="spam">Spam</option>
            <option value="trash">Trash</option>
          </select>
        </div>
        <div className="mailContent">
          <h4>{mail.subject.slice(0, 20)}..</h4>
          <p>{mail.body.slice(0, 90)}...</p>
        </div>
      </div>
    </Link>
  );
}

export default SingleMail;

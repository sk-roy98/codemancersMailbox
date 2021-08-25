import React from "react";
import "./SingleMail.css";
import { Link } from "react-router-dom";

function SingleMail({ mail }) {
  return (
    <Link
      className="link"
      to={`/mail/${mail.id}`}
      style={{ width: "100%", textDecoration: "none" }}
    >
      <div className="singleMail">
        <div className="profile">{mail.userId}</div>
        <div className="tagApplied">
          <h3>{mail.tag}</h3>
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

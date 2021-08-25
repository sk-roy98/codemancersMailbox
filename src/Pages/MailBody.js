import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MailBody.css"

function MailBody() {
  const mails = useSelector((state) => state.mailReducer.mails);
  const id = useParams().id;
  const mail = mails.find((item) => item.id === Number(id));
  // console.log(mail, id, mails);
  return (
    <main style={{ width: "70%" }}>
      <div className="mailBodyHead">
        <div className="actionTab">
          <button className="backButton">{`<`}</button>
          <div className="filterApplied"><p>filterApplied</p></div>
        </div>
        <h2 style={{ color: "#ddd" }}>{mail.subject}</h2>
      </div>
      <div className="mailBodyText">
        <p style={{ color: "#ddd" }}>{mail.body}</p>
      </div>
    </main>
  );
}

export default MailBody;

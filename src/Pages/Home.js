import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import FilterBar from "../Components/FilterBar";

function Home() {
  const [mails, setMails] = useState([]);

  const fetchMails = async () => {
    const api = "https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98";
    try {
      const data = await axios.get(api);
      console.log(data.data);
      setMails(data.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchMails();
  }, []);

  return (
    <div>
      <FilterBar/>
      <main>
        {mails &&
          mails.map((mail, index) => {
            return (
              <div className="singleMail" key={index}>
                <div className="profile">{mail.userId}</div>
                <div className="filterIcons">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
                <div className="mailContent">
                  <h4>{mail.subject.slice(0, 20)}..</h4>
                  <p>{mail.body.slice(0, 90)}...</p>
                </div>
              </div>
            );
          })}
      </main>
    </div>
  );
}

export default Home;

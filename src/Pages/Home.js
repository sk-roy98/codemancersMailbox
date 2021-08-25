import { useEffect } from "react";
import "./Home.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterMails } from "../Redux/slices/mailSlice";
import SingleMail from "../Components/SingleMail";

function Home() {
  const filteredMails = useSelector((state) => state.mailReducer.filterMails);

  const dispatch = useDispatch();
  const params = useParams();

  // console.log(filteredMails);
  useEffect(() => {
    if (params.tag) {
      dispatch(filterMails(params.tag));
    }
  }, [params]);

  return (
    <main>
      {filteredMails &&
        filteredMails.map((mail, index) => {
          return (
            <Link
              key={index}
              to={`/mail/${mail.id}`}
              style={{ width: "100%", textDecoration: "none" }}
            >
              <SingleMail mail={mail} key={index} />
            </Link>
          );
        })}
    </main>
  );
}

export default Home;

import { useEffect } from "react";
import "./Home.css";
import { BsInboxFill, BsTrashFill } from "react-icons/bs";
import { RiSpamFill, RiDraftFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchMails } from "../Redux/slices/mailSlice";
import SingleMail from "../Components/SingleMail";

function SearchMails() {
  const searchedMails = useSelector((state) => state.mailReducer.searchedMails);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.pattern) {
      dispatch(searchMails(params.pattern));
    }
  }, [params]);

  console.log(searchedMails, params.pattern);
  return (
      <main>
        {searchedMails &&
          searchedMails.map((mail, index) => {
            return (
              <Link to={`/mail/${mail.id}`} style={{ width: "100%", textDecoration:"none" }}>
                <SingleMail mail={mail} key={index} />
              </Link>
            );
          })}
      </main>
  );
}

export default SearchMails;

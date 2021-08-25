import "./App.css";
import { useEffect } from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import FilterBar from "./Components/FilterBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MailBody from "./Pages/MailBody";
import { fetchMails } from "./Redux/slices/mailSlice";
import { useDispatch } from "react-redux";
import SearchMails from "./Pages/SearchMails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMails());
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <FilterBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:tag">
            <Home />
          </Route>
          <Route exact path="/mail/:id">
            <MailBody />
          </Route>
          <Route exact path="/search/:pattern">
            <SearchMails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

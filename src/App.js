import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import FilterBar from "./Components/FilterBar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MailBody from "./Pages/MailBody";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <FilterBar/>
        <Switch>
        <Route exact path="/:tag">
            <Home />
          </Route>
          <Route exact path="/mail/:id">
            <MailBody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Search from "./Components/Search";
import Home from "./Pages/Home";
import MailBody from "./Pages/MailBody";

function App() {
  return (
    <div className="App">
      <header className="header">
        <span className="logo">
          <img
            src="https://img.olhardigital.com.br/wp-content/uploads/2020/10/20201006041950.jpg"
            alt="logo"
            width="70"
            height="50"
          />
          <p>ail</p>
        </span>
        <Search />
        <span>
          <img
            src="https://avatars.githubusercontent.com/u/48832929?s=400&u=fb96e6f1bab901dfc12fe3ac4443aeeca1484a3c&v=4"
            alt="picture"
            width="35"
            height="35"
          />
        </span>
      </header>
      <section className="mainSection">
        <Home />
        <MailBody />
      </section>
    </div>
  );
}

export default App;

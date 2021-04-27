import logo from "./logo.svg";
import "./App.css";

const name = "Andre";

function ATag() {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Welcome, {name}! Learn React
    </a>
  );
}

// document.querySelector("p").style = {
//   marginLeft: "5rem",
//   color: "red",
// };
// marginLeft

const marginLeft = "5rem";

const PTag = () => {
  return (
    // <p className="vip" style={{ marginLeft, color: "red" }}>
    <p className="vip">
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PTag></PTag>
        <ATag></ATag>
      </header>
    </div>
  );
}

export default App;

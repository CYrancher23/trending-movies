import logo from "./logo.svg";
import "./App.css";

apiKey = "df810467-4f12-4926-9483-2f0bde6b626f";
url = "https://api.openchargemap.io/v3/poi/";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

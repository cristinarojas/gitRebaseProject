import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi <code>my name</code> is Cristina.
        </p>

        <p>
          Im <code>from</code> Mexico.
          Hi <code>my</code>name is Carlos.
        </p>

        <p>
          I'm <code>from</code>Mexico!
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

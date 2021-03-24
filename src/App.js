import logo from './logo.svg';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >   
        </a>
        <Dictionary />
      </header>
      <footer>
        <small>
        Coded by Catherine Lim
        </small>
      </footer>
    </div>
  );
}

export default App;

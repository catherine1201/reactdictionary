import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className ="DictionaryApp"> 
      <header className="App-header">
       
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
    </div>
  );
}

export default App;

import './App.css';
import Dictionary from "./Dictionary";
import Logo from "./Logo.png";

function App() {
  return (
    <div className="App">
      <div className ="DictionaryApp"> 
      <header className="App-header">
       
         <img src={Logo} className="App-logo img-fluid" alt="logo" />   
        <span className="Logo-description">Cat's Dictionary</span>
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

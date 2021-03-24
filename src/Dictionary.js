import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary() {

  let [ wordsearch, setWordSearch ] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Definition for ${wordsearch} is ...`);
  }

  function handleWordSearch(event) {
    setWordSearch(event.target.value)
  }
  
return (
  <div className = "Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange={handleWordSearch} />
    </form>
  </div>
);
}
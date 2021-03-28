import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import "./Dictionary.css"

export default function Dictionary() {
  let [ wordsearch, setWordSearch ] = useState("");
  let [ searchResult, setSearchResult ] = useState(null);

  function handleResponse(response) {
    console.log(response.data[ 0 ]);
    console.log(response.data[ 0 ].meanings[ 0 ].definitions[ 0 ].definition);
    setSearchResult(response.data[ 0 ]);
  }

  function search(event) {
    event.preventDefault();
  
// documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordsearch}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordSearch(event) {
    setWordSearch(event.target.value)
  }
  
return (
  <div className = "Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange={handleWordSearch} />
    </form>

  <SearchResult results = {searchResult} />
  </div>
);
}
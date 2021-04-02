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

      function search(event){
     event.preventDefault();
      let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordsearch}`
      axios.get(apiUrl).then(handleResponse);
     
  }
  
//   function search(event) {
//     event.preventDefault();
  
// // documentation: https://dictionaryapi.dev/
//     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordsearch}`;
//     console.log(apiUrl);
//     axios.get(apiUrl).then(handleResponse);

    
//     //documentation: https://www.pexels.com/api/documentation/
//     let pexelsApiKey = "563492ad6f91700001000001d53abb35f9c241688b9371aa40535651";
//     let pexelsUrl = `https://api.pexels.com/v1/search?query=${wordsearch}&per_page=6`;
//     let headers = { Authorization : `Bearer ${pexelsApiKey}` };
//     axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
    
//   }

  function handleWordSearch(event) {
    setWordSearch(event.target.value)
  }
  
return (
  <div className = "Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange={handleWordSearch} />
    </form>

    <SearchResult results={searchResult} />
   
  </div>
);
}
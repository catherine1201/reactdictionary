import React from "react";
import Definitions from "./Definitions";

export default function SearchResult(props){
  if (props.results) {
    return (
      <div className="SearchResult">
      <h2>{props.results.word}</h2>
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Definitions meaning={meaning} />
          </div>
        );
      })}
    </div>
    );
  } else {
    return null;
  }
}
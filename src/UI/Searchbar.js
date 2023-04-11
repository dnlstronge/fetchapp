import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import ValidCountries from "../Data/ValidCountries";
/*config: 

  (props)

onClick: lift state up as search term
isValid: points to state update for valid query

  (local)

SearchTerm: local state determined by user input


*/
const valid = ValidCountries;


const SearchBar = ({ onClick, isValid }) => {
  const [searchTerm, setSearchTerm] = useState("");


  const handleInput = (e) => {
    let input = e.target.value.trim().toLowerCase().replace(/ /g, "")
    if(valid[input]) {
        console.log(valid[input])
    } else {
        console.log("Error: no country found")
    }
    
  }
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="search"></label>
      <input onChange={handleInput} type="text" className={classes.input} id="search"></input>
      <button className={classes.btn} onClick={onClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

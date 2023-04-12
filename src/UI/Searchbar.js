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


const SearchBar = ({ searchedFor, isValid, onClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [localValidation, setLocalValidation] = useState(false)

  const handleInput = (e) => {
   searchedFor(e.target.value)
    let input = e.target.value.trim().toLowerCase().replace(/ /g, "")
    console.log(input)
    if(valid[input]) {
        setLocalValidation(true)
        setSearchTerm(valid[input])
    } else {
        setLocalValidation(false)
        console.log("Error: no country found")
    }
    
  }

   const handleClick = () => {
        if(localValidation) {
            isValid(true)
            onClick(searchTerm)
        } else {
            isValid(false)
        }
   }
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="search"></label>
      <input onChange={handleInput} type="text" className={classes.input} id="search"></input>
      <button className={classes.btn} onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

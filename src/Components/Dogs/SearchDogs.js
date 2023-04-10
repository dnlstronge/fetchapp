import React, { useState } from "react";
import classes from "./SearchDogs.module.css";
import Button from "../../UI/Button";
import useFetch from "../../Hooks/useFetch";
import Search from "../../Data/Search";

const dogs = Search;

const SearchDogs = () => {
  const [showDogs, setShowDogs] = useState(false);
  const [isValid, setisValid] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const data = useFetch(
    `https://dog.ceo/api/breed/${searchTerm}/images/random/3`,
    isValid
  );

  const handleSearch = () => {
    if (isValid) {
      setShowDogs(true);
    } else {
      setShowDogs(false);
    }
  };
  const handleSearchTerm = (e) => {
    let validate = e.target.value.trim().toLowerCase().replace(/ /g, "");
    let validated = dogs[validate];
    if (validated) {
      console.log(validated);
      setisValid(true);
      setSearchTerm(validated);
    } else {
      console.log("No entries found");
      setisValid(false);
      setSearchTerm("");
      setShowDogs(false);
    }
  };

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="searchbar">
        <input
          type="text"
          onChange={handleSearchTerm}
          className={classes.input}
        ></input>
        <Button onClick={handleSearch} text="Search" />
      </label>
    </div>
  );
};

export default SearchDogs;

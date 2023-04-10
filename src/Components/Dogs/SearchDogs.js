import React, { useState } from "react";
import classes from "./SearchDogs.module.css";
import Button from "../../UI/Button";
import useFetch from "../../Hooks/useFetch";
import Search from "../../Data/Search";

const dogs = Search;

const SearchDogs = () => {
  const [showDogs, setShowDogs] = useState(false);
  const [noDogs, setNoDogs] = useState(false)
  const [isValid, setisValid] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const data = useFetch(
    `https://dog.ceo/api/breed/${searchTerm}/images/random/4`,
    isValid
  );

  const handleSearch = () => {
    const element = document.getElementById("focus");
    element.scrollIntoView({ behavior: "smooth" })
    if (isValid) {
      setNoDogs(false)
      setShowDogs(true);
    } else {
      setNoDogs(true)
      setShowDogs(false);
      
    }
  };
  const handleSearchTerm = (e) => {
    let validate = e.target.value.trim().toLowerCase().replace(/ /g, "");
    let validated = dogs[validate];
    if (validated) {
      //console.log(validated);
      setisValid(true);
      setSearchTerm(validated);
    } else {
      //console.log("No entries found");
      setisValid(false);
      setSearchTerm("");
      setShowDogs(false);
    }
  };

  return (
    <div className={classes.container}>
        <p className={classes.para}>Developing upon the previous search based on a drop down, 
        in this section I've added a search bar which decides if the user input is valid by cross referencing
        an internal list, it then provides parameters for a custom fetch hook. It returns pictures of dogs 
        by breed entered and searched for.</p>
        <p className={classes.para}>If the search term is valid, a fetch hook returns data. If an invalid search parameter is entered get will not be sent although the fetch hook 
        will handle a 404 also.</p>
      <label className={classes.label} htmlFor="searchbar">
        <input
          type="text"
          onChange={handleSearchTerm}
          className={classes.input}
        ></input>
        <Button onClick={handleSearch} text="Search" />
      </label>
      {noDogs && 
      <p className={classes.nodogs}>No results found</p>}
      <section id="focus" className={classes.sectionImages}>
        {showDogs &&
          data[0].data.map((dog) => {
            return (
              <img
                key={dog}
                className={classes.images}
                src={dog}
                alt={searchTerm}
              />
            );
          })}
      </section>
    </div>
  );
};

export default SearchDogs;

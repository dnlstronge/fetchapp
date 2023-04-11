import React, { useState, useEffect } from "react";
import classes from "./Countries.module.css";
import SearchBar from "../../UI/Searchbar";


/* new component to try out manipulating data from a different api */
/* Build custom searchbar component and import */

/*API = https://restcountries.com/v3.1/name/{name} */

const Countries = () => {
  const [search, setSearch] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showData, setShowData] = useState(false);
  const [error, setError] = useState({
    isError: true,
    msg: null
  })
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isValid === true) {
      try {
        fetch(`https://restcountries.com/v3.1/name/${search}`)
          .then((res) => res.json())
          .then((items) => {
            setData(items);
            console.log(items)
          });
          console.log("Data request successfull")
          setError({isError: false, msg: null})
          setShowData(true)
      } catch (error) {
        setError({isError: true, msg: error.msg})
        setShowData(false)
        //console.log(error.message);
      }
    } else {
        setError({isError: true, msg: "Please enter a valid country"})
    }
  }, [search, isValid]);

  return (
    <div className={classes.container}>
      <h4 className={classes.heading}>Countries API</h4>
      <p className={classes.para}>
        This section uses the countries api, it allows users to search for a
        particular country and display data
      </p>
      <SearchBar isValid={setIsValid} onClick={setSearch} />
      {Error.isError && 
      <p>Ooops... {error.msg}</p>}
      {showData &&
      <p>TEST PARA</p>}
    </div>
  );
};

export default Countries;

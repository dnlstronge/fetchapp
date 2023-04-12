import React, { useState, useEffect } from "react";
import classes from "./Countries.module.css";
import SearchBar from "../../UI/Searchbar";
import Card from "./Card";

/* new component to try out manipulating data from a different api */
/* Build custom searchbar component and import */

/*API = https://restcountries.com/v3.1/name/{name} */

const Countries = () => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showData, setShowData] = useState(false);
  const [error, setError] = useState({
    isError: false,
    msg: null,
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isValid === true) {
      try {
        fetch(`https://restcountries.com/v3.1/name/${search}`)
          .then((res) => res.json())
          .then((items) => {
            setData(items);
            console.log(items);
          });

        setError({ isError: false, msg: null });
        setShowData(true);
      } catch (error) {
        setError({ isError: true, msg: error.msg });
        setShowData(false);
      }
    } else {
      if (searchItem.length > 0) {
        setError({ isError: true, msg: `no data found` });
      } else {
        setError({ isError: false, msg: null });
      }
    }
  }, [search, isValid, searchItem]);

  return (
    <div className={classes.container}>
      <h4 className={classes.heading}>Countries API</h4>
      <p className={classes.para}>
        This section uses the countries api, it allows users to search for a
        particular country and display data
      </p>
      <SearchBar
        searchedFor={setSearchItem}
        isValid={setIsValid}
        onClick={setSearch}
      />
      {error.isError === true && (
        <p className={classes.error}>Ooops... {error.msg}</p>
      )}

      {showData && data && !error.isError && (
        <Card
          head={data[0].name.common}
          COA={data[0].coatOfArms.png}
          offName={data[0].name.official}
          flag={data[0].flags.png}
          continent={data[0].continents[0]}
          subregion={data[0].subregion}
          capital={data[0].capital[0]}
          carside={data[0].car.side}
          landlocked={data[0].landlocked}
          population={data[0].population}
          //   currency={`${data[0].currencies[0].name}`}
        />
      )}
    </div>
  );
};

export default Countries;

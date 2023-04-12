import React, { useState, useEffect } from "react";
import classes from "./Countries.module.css";
import SearchBar from "../../UI/Searchbar";
import Card from "./Card";

/* new component to try out manipulating data from a different api */
/* Build custom searchbar component and import */

/*API = https://restcountries.com/v3.1/name/{name} */

const Countries = () => {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("");
  const [showData, setShowData] = useState(false);
  const [error, setError] = useState({
    isError: false,
    msg: null,
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    setError({isError: false, msg: null})
    if (search.length > 0) {
      setLoading(true)
      try {
        fetch(`https://restcountries.com/v3.1/name/${search}`).then((res) => {
          console.log(search);
          console.log(res);
          if (res.ok) {
            
            res.json().then((items) => {
              setData(items);
              setShowData(true);
              setLoading(false)
            });
          } else {
            setLoading(false)
            setShowData(false);
            setError({ isError: true, msg: "No results found" });
          }
        });

        
      } catch (error) {
        setLoading(false)
        setError({ isError: true, msg: error.msg });
        setShowData(false);
      }
    }
  }, [search, setError, setShowData]);

  return (
    <div className={classes.container}>
      <h4 className={classes.heading}>Countries API</h4>
      <p className={classes.para}>
        This section uses the countries api, it allows users to search for a
        particular country and display data which is specific to each. The search also returns 
        the specific coat of arms, flag and some general data about the country. 
      </p>
      <SearchBar onClick={setSearch} />
      {error.isError && search.length > 0 && (
        <p className={classes.error}>Ooops... {error.msg}</p>
      )}
      {loading && 
        <p className={classes.error}>Loading...</p>}

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

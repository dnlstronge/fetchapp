
import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import Users from "./Components/Users/Users";
import Button from "./UI/Button";
import Home from "./Components/Home/Home";
import Dogs from "./Components/Dogs/Dogs";
import DogsTwo from "./Components/Dogs/DogsTwo";
import Countries from "./Components/Countries/Countries"

/* [goal] - Use an API to play around with some data */

const App = () => {

  /* state for different APIs, in future group these into different pages */

  const [showPage, setShowPage] = useState({
    home: true,
    userAPI: false,
    dogsAPI: false,
    laterAPIII: false,
    countries: false
  })


const handleHome = () => {
  setShowPage({home: true, userAPI: false, dogsAPI: false, dogsAPIII: false, countries: false})
}
const handleUser = () => {
  setShowPage({home: false, userAPI: true, dogsAPI: false, dogsAPIII: false, countries: false})
}
const handleDogs = () => {
  setShowPage({home: false, userAPI: false, dogsAPI: true, dogsAPIII: false, countries: false})
}
const handleDogsII = () => {
  setShowPage({home: false, userAPI: false, dogsAPI: false, dogsAPIII: true, countries: false})
}
const handleCountries = () => {
  setShowPage({home: false, userAPI: false, dogsAPI: false, dogsAPIII: false, countries: true})
}

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h2 className={classes.heading}>API Fetching Funhouse</h2>
      </header>
      <div className={classes.btnContainer}>
        <Button onClick={handleHome} id="Home" text="Home" />
        <Button onClick={handleUser} id="userAPI" text="User API" />
        <Button onClick={handleDogs} id="Dogs API" text="Dogs API" />
        <Button onClick={handleDogsII} id="Dogs API II" text="Dogs API-2" />
        <Button onClick={handleCountries} id="countries" text="Countries API" />
      </div>
      {showPage.home &&
      <Home></Home> }
      {showPage.userAPI &&
      <Users />}
      {showPage.dogsAPI &&
        <Dogs />}
      {showPage.dogsAPIII && 
        <DogsTwo />}
        {showPage.countries &&
        <Countries />
        }
    </div>
  );
};

export default App;

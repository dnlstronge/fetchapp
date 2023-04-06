import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import Users from "./Components/Users/Users";
import Button from "./UI/Button";
import Home from "./Components/Home/Home";

/* [goal] - Use an API to play around with some data */

const App = () => {

  /* state for different APIs, in future group these into different pages */

  const [showPage, setShowPage] = useState({
    home: true,
    userAPI: false,
    nextAPI: false,
    laterAPI: false
  })


const handleHome = () => {
  setShowPage({home: true, userAPI: false, nextAPI: false, laterAPI: false})
}
const handleUser = () => {
  setShowPage({home: false, userAPI: true, nextAPI: false, laterAPI: false})
}
const handleNext = () => {
  setShowPage({home: false, userAPI: false, nextAPI: true, laterAPI: false})
}
const handleLater = () => {
  setShowPage({home: false, userAPI: false, nextAPI: false, laterAPI: true})
}

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h2 className={classes.heading}>API Fetching Funhouse</h2>
      </header>
      <div className={classes.btnContainer}>
        <Button onClick={handleHome} id="Home" text="Home" />
        <Button onClick={handleUser} id="userAPI" text="User API" />
        <Button id="nextAPI" text="Next API" />
        <Button id="laterAPI" text="Later API" />
      </div>
      {showPage.home &&
      <Home></Home> }
      {showPage.userAPI &&
      <Users />}
    </div>
  );
};

export default App;

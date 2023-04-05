import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import Users from "./Components/Users/Users";
import Button from "./UI/Button"

/* [goal] - Use an API to play around with some data */

const App = () => {



/* move logic to new component */
  

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h2 className={classes.heading}>API Fetch Practice</h2>
        
      </header>
      <div className={classes.btnContainer}>
        <Button id="userAPI" text="User API"/>
        <Button id="nextAPI" text="Next API"/>
        <Button id="laterAPI" text="Later API"/>
      </div>
     <Users />
    </div>
  );
};

export default App;

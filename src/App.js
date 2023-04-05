import logo from './logo.svg';
import React, { useState, useEffect} from "react"
import classes from "./App.module.css"



function App() {

  const [users, setUsers] = useState({
    name: "",
    address: ""
  })

  
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h2 className={classes.heading}>API Fetch Practice</h2>
        <div></div>
      </header>
      <div className={classes.dataContainer}></div>
    </div>
  );
}

export default App;

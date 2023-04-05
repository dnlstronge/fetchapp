import logo from './logo.svg';
import React, { useState, useEffect} from "react"
import classes from "./App.module.css"



/* [goal] - Use an API to play around with some data */

function App() {

  const [users, setUsers] = useState({
    name: "",
    address: ""
  })
  const [toggleUsers, setToggleUsers] = useState(false)



  const buttonHandler = () => {
    setToggleUsers(!toggleUsers)
  }

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h2 className={classes.heading}>API Fetch Practice</h2>
        <div></div>
      </header>
      <div className={classes.dataContainer}></div>
      <button className={classes.btn}>Show Data</button>
    </div>
  );
}

export default App;

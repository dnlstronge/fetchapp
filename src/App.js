import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import classes from "./App.module.css";

/* [goal] - Use an API to play around with some data */

function App() {
  const [users, setUsers] = useState({
   
  });
  const [toggleUsers, setToggleUsers] = useState(false);
  const fetchUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }

  const buttonHandler = () => {
    setToggleUsers(!toggleUsers)
    fetchUsers()

  };




  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h2 className={classes.heading}>API Fetch Practice</h2>
      </header>

      <div className={classes.dataContainer}>
        
         {toggleUsers && users.length > 0 && 
            users.map(user => { return (
                <div className={classes.userbox}>
                  <p>Name: {user.name}</p>
                  <p>Username: {user.username}</p>
                </div>
                )})}
            
        
      </div>
      <button onClick={buttonHandler} className={classes.btn}>
        Show Data
      </button>
    </div>
  );
}

export default App;

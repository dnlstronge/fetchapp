import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import classes from "./App.module.css";

/* [goal] - Use an API to play around with some data */

function App() {
  const [filtered, setFiltered] = useState([])
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
    console.log(users[0])
    setToggleUsers(!toggleUsers)
    fetchUsers()

  };

  const handleFilter = (e) => {
    
    let namefilter = e.target.value.toUpperCase()
    let filteredArray = users.filter(user => user.username.charAt(0) === namefilter)
    console.log(filteredArray)
     
   // setFiltered(users.filter(user => user.name.charAt(0).toLowerCase === ""))
   // console.log(filtered)
  }


  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h2 className={classes.heading}>API Fetch Practice</h2>
      </header>
      {toggleUsers && 
      <label className={classes.searchbarLabel} htmlFor="searchinput">
        <input id="searchinput" className={classes.searchbar} type="text" placeholder="search" onChange={handleFilter}></input>
        </label>}
      <div className={classes.dataContainer}>
        
         {toggleUsers && users.length > 0 && 
            users.map(user => { return ( 
                <div key={user.id} className={classes.userbox}>
                  <p className={classes.userpara}>Name: {user.name}</p>
                  <p className={classes.userpara}>Username: {user.username}</p>
                  <p className={classes.userpara}>Website: {user.website}</p>
                </div>
                )})}
            
        
      </div>
      <button onClick={buttonHandler} className={classes.btn}>
        {toggleUsers ? "SHOW" : "HIDE"}
      </button>
    </div>
  );
}

export default App;

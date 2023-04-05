import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import classes from "./App.module.css";

/* [goal] - Use an API to play around with some data */

const App = () => {
  
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [toggleUsers, setToggleUsers] = useState(false);
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setUsers(data)
    setFiltered(data);
  };

  const buttonHandler = () => {
    console.log(users[0]);
    setToggleUsers(!toggleUsers);
    fetchUsers();
  };

  const handleFilter = (e) => {
    if(e.target.value.length > 0) {
    let namefilter = e.target.value.toUpperCase();
    let filteredArray = users.filter(
      (user) => user.username.charAt(0) === namefilter
    );
    console.log(filteredArray);
    setFiltered(filteredArray)    
    // setFiltered(users.filter(user => user.name.charAt(0).toLowerCase === ""))
    // console.log(filtered)
  } else {
    console.log(users)
    setFiltered(users)
  }
}

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h2 className={classes.heading}>API Fetch Practice</h2>
      </header>
      {toggleUsers && (
        <label className={classes.searchbarLabel} htmlFor="searchinput">Filter by username
          <input
            id="searchinput"
            className={classes.searchbar}
            type="text"
            placeholder="search"
            onChange={handleFilter}
          ></input>
        </label>
      )}
      <div className={classes.dataContainer}>
        {filtered.length < 1 && <p className={classes.userparaError}>No users Found</p>}
        {toggleUsers &&
          filtered.length > 0 &&
          filtered.map((user) => {
            
            return (
              <div key={user.id} className={classes.userbox}>
                <p className={classes.userpara}>Name: {user.name}</p>
                <p className={classes.userpara}>Username: {user.username}</p>
                <p className={classes.userpara}>Website: {user.website}</p>
              </div>
            );
          })}
      </div>
      <button onClick={buttonHandler} className={classes.btn}>
        {toggleUsers ? "Hide Users" : "Show Users"}
      </button>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import classes from "./Users.module.css";
import ErrorComp from "../../UI/Errors/ErrorComp";
import useErrorHandler from "../../Hooks/useErrorHandler";

const Users = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    status: null,
    msg: null,
  });
  const [users, setUsers] = useState();
  const [filtered, setFiltered] = useState([]);
  const [toggleUsers, setToggleUsers] = useState(false);

  const fetchUsers = async () => {
    setIsloading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      if (response?.ok) {
        setError({ isError: false, status: null, msg: null });
        if (data) {
          setIsloading(false);
          setUsers(data);
          setFiltered(data);
        }
      } else {
        setIsloading(false);
        //setError({isError: true, status: response.status, msg: `Error: ${response.status} something went wrong`})
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useErrorHandler(response, setError);

        //console.log(`Error: ${response.status} something went wrong`)
      }
    } catch (error) {
      //console.log(error.message)
      setIsloading(false);
      setError({ isError: true, status: error.status, msg: error.message });
    }
  };

  const buttonHandler = () => {
    setIsloading(true);
    setToggleUsers(!toggleUsers);
    fetchUsers();
  };

  const handleFilter = (e) => {
    if (e.target.value.length > 0) {
      let namefilter = e.target.value.toUpperCase();
      let filteredArray = users.filter(
        (user) =>
          user.username.charAt(0).toUpperCase() === namefilter ||
          user.username.toUpperCase().includes(namefilter)
      );

      setFiltered(filteredArray);
    } else {
      setFiltered(users);
    }
  };

  return (
    <>
      <section className={classes.section}>
        <h4 className={classes.heading}>JSON placeholder</h4>
        <div className={classes.content}>
          <p className={classes.subPara}>
            This section uses the JSON placeholder api. It fetches some data
            (users) and displays different users inside a panel. A filter can
            then be applied to the cards shown based on username. Click show to
            get data.
            <br></br>
            <br></br>
            I've added custom error handling for errors which fall beyond the
            scope of the fetch API.
          </p>
          <p className={classes.subPara}>
            {`Url: `}
            <a
              target="blank"
              className={classes.subAnchor}
              href="https://jsonplaceholder.typicode.com/"
            >
              https://jsonplaceholder.typicode.com
            </a>
          </p>
          <p className={classes.subPara}>
            {`Code: `}
            <a
              target="blank"
              className={classes.subAnchor}
              href="https://github.com/dnlstronge/fetchapp/tree/master/src/Components/Users"
            >
              https://github.com/dnlstronge/fetchapp
            </a>
          </p>
        </div>
      </section>
      <button onClick={buttonHandler} className={classes.btn}>
        {toggleUsers ? "Hide Users" : "Show Users"}
      </button>
      {error.isError && <ErrorComp status={error.status} msg={error.msg} />}
      {isLoading && <div className={classes.loading}>Loading....</div>}
      {toggleUsers && !error.isError && (
        <label className={classes.searchbarLabel} htmlFor="searchinput">
          Filter by username
          <input
            id="searchinput"
            className={classes.searchbar}
            type="text"
            placeholder="search"
            onChange={handleFilter}
          ></input>
        </label>
      )}

      {!error.isError && (
        <div className={classes.dataContainer}>
          {filtered.length < 1 && (
            <p className={classes.userparaError}>No users Found</p>
          )}
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
      )}
    </>
  );
};

export default Users;

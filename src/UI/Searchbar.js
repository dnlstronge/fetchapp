import React from "react";
import classes from "./SearchBar.module.csss"

const SearchBar = () => {
    return (
        <div className={classes.container}>
            <label htmlFor="search"></label>
            <input id="search"></input>
            <button></button>
        </div>
    )
}

export default SearchBar;
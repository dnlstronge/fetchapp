import React, { useState } from "react";
import classes from "./SearchBar.module.csss"

const SearchBar = ({onClick}) => {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className={classes.container}>
            <label className={classes.label} htmlFor="search"></label>
            <input type="text" className={classes.input} id="search"></input>
            <button onClick={onClick}>Search</button>
        </div>
    )
}

export default SearchBar;
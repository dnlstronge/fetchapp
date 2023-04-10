import React, { useState } from "react";
import classes from "./SearchDogs.module.css"
import Button from "../../UI/Button"

const SearchDogs = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = (e) => {

    }

    return (

        <div className={classes.container}>
            <label className={classes.label} htmlFor="searchbar"> 
                <input className={classes.input}></input>
                <Button onClick={handleSearch}text="Search" />
            </label>
    
        </div>
    )
}

export default SearchDogs;

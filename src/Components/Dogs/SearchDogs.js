import React, { useState } from "react";
import classes from "./SearchDogs.module.css"
import Button from "../../UI/Button"
import useFetch from "../../Hooks/useFetch"

const SearchDogs = () => {
    const [isValid, setisValid] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const data = useFetch(`https://dog.ceo/api/breed/${breedSelect}/images/random/3`, isValid)
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

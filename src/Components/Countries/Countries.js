import React, { useState, useEffect }from "react"
import classes from "./Countries.module.css"
import SearchBar from "../../UI/Searchbar"
import useFetch from "../../Hooks/useFetch"

/* new component to try out manipulating data from a different api */
/* Build custom searchbar component and import */

/*API = https://restcountries.com/v3.1/name/{name} */


const Countries = () => {

    const [search, setSearch] = useState("ireland")
    const [isValid, setIsValid] = useState(true)

    const [data] = useFetch(`https://restcountries.com/v3.1/name/ireland`, true )


    useEffect(() => {
        console.log(data)
    }, [search, data])
    return (
        <div className={classes.container}>
            <h4 className={classes.heading}>Countries API</h4>
            <p className={classes.para}>This section uses the countries api, it allows users to search
            for a particular country and display data</p>
            <SearchBar isValid={setIsValid} onClick={setSearch} />
        </div>
    )
}


export default Countries;
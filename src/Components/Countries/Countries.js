import React, { useState }from "react"
import classes from "./Countries.module.css"
import SearchBar from "../../UI/Searchbar"

/* new component to try out manipulating data from a different api */
/* Build custom searchbar component and import */




const Countries = () => {

    const [search, setSearch] = useState(null)

    return (
        <div className={classes.container}>
            <h4 className={classes.heading}>Countries API</h4>
            <p className={classes.para}>This section uses the countries api, it allows users to search
            for a particular country and display data</p>
            <SearchBar onClick={setSearch} />
        </div>
    )
}


export default Countries;
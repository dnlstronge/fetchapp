import React from "react"
import classes from "./Countries.module.css"

/* new component to try out manipulating data from a different api */




const Countries = () => {
    return (
        <div className={classes.container}>
            <h4>Countries API</h4>
            <p>This section uses the countries api, it allows users to search
            for a particular country and display data</p>
        </div>
    )
}


export default Countries;
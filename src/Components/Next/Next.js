import React from "react"
import classes from "./Next.module.css"

/* new component to try out manipulating data from a different api */




const Next = () => {
    return (
        <div className={classes.container}>
            <h4>Countries API</h4>
            <p>This section uses the countries api, it allows users to search
            for a particular country and display data</p>
        </div>
    )
}


export default Next;
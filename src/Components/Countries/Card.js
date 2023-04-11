import React from "react"
import classes from "./Card.module.css"

/* Config:

(props)

head: heading
COA: coat of arms
offName: official name
*/

const Card = ({head, COA, offName, flag}) => {
    const url = flag
    return (
        <div className={classes.container}>
        <section className={classes.nameandcoat}>
            <h3 className={classes.headingName}>{head}</h3>
            <div style={{ backgroundImage:`url(${url})`, backgroundSize:"100%", backgroundRepeat: "no-repeat" }} className={classes.flag} alt="flag">
                </div>
                <img className={classes.coa} src={COA} alt="coat of arms"/>
            <p className={classes.officialName}>{offName}</p>
            </section>
        </div>
    )
}

export default Card;
import React from "react"
import classes from "./Card.module.css"

/* Config:

(props)

head: heading
COA: coat of arms
offName: official name
subregion: sub region
carside: side of road driven on
landlocked: boolean
population: number
*/

const Card = ({
        head, 
        COA, 
        offName, 
        flag, 
        continent, 
        subregion,
        capital, 
        currency,
        carside,
        landlocked,
        population
        }) => {
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
            <section className={classes.sidepanel}>
                <h4 className={classes.headingSide}> did you know....</h4>
                <p className={classes.para}>
                {head} is a country in {subregion} and it's capital city is {capital}. 
                In {head} they drive {carside}-hand side of the road. </p>
                {landlocked && 
                <p className={classes.para}>This country is landlocked by surrounding countries.</p>}
                <div className={classes.subsection}>
                <p className={classes.subpara}>Population: {population}</p>
                </div>
            </section>
        </div>
    )
}

export default Card;
import React from "react";
import classes from "./Card.module.css";

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
  population,
}) => {
  const url = flag;
  return (
    <div className={classes.container}>
      <section className={classes.nameandcoat}>
        <h3 className={classes.headingName}>{head}</h3>
        <div
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
          className={classes.flag}
          alt="flag"
        ></div>
        <img className={classes.coa} src={COA} alt="coat of arms" />
        <p className={classes.officialName}>{offName}</p>
      </section>
      <section className={classes.sidepanel}>
        <h4 className={classes.headingSide}> about...</h4>

        <div className={classes.subsection}>
          <ul className={classes.list}>
            <li className={classes.listitem}>
              <p className={classes.listpara}>Region: </p>
              <p className={classes.listpara}>{subregion}</p>
            </li>
            <li className={classes.listitem}>
              <p className={classes.listpara}>Capital City: </p>
              <p className={classes.listpara}>{capital}</p>
            </li>
            <li className={classes.listitem}>
              <p className={classes.listpara}>Population: </p>
              <p className={classes.listpara}>{population}</p>
            </li>
            <li className={classes.listitem}>
              <p className={classes.listpara}>Drive on: </p>
              <p className={classes.listpara}>{carside}</p>
            </li>
            {landlocked && 
            <li className={classes.listitem}>
              <p className={classes.listpara}>Landlocked: </p>
              <p className={classes.listpara}>Yes</p>
            </li> }
            {!landlocked && 
            <li className={classes.listitem}>
              <p className={classes.listpara}>Landlocked: </p>
              <p className={classes.listpara}>No</p>
            </li> }
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Card;

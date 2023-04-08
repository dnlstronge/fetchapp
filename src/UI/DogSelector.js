import dogBreeds from "../Data/DogBreeds";
import React from "react";
import classes from "./DogSelector.module.css";

const breeds = dogBreeds;


/* config: 

takes a prop which points to a handler in parent
Should lift dog selected value up

 */

const DogSelector = ({ selectDog }) => {
  return (
    <div className={classes.container}>
      <label htmlFor="dogselect" className={classes.label}>
        <select onChange={selectDog} className={classes.label} id="dogselect">
          <option value="select">--select--</option>
          {breeds.map((breed) => {
            return <option key={breed} value={breed}>{breed}</option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default DogSelector;

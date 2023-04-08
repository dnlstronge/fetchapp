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
          <option>--select--</option>
          {breeds.map((breed) => {
            return <select value={breed}>{breed}</select>;
          })}
        </select>
      </label>
    </div>
  );
};

export default DogSelector;

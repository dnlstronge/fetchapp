/* this component should return a random dog pic by breed

[x] - create a seperate UI component to handle the drop-down*/

import React from "react";
import classes from "./DogsBreed.module.css";
import DogSelector from "../../UI/DogSelector";

const breedHandler = (e) => {
    console.log(e.target.value)
}

const DogsBreed = () => {
  return <div className={classes.container}>
        <DogSelector selectDog={breedHandler}/>
  </div>;
};

export default DogsBreed;

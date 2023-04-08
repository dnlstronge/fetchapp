/* this component should return a random dog pic by breed

[x] - create a seperate UI component to handle the drop-down*/

import React, { useState } from "react";
import classes from "./DogsBreed.module.css";
import DogSelector from "../../UI/DogSelector";
import Button from "../../UI/Button";



const DogsBreed = () => {
  
  const [breedSelect, setBreedSelect] = useState(null)

  const breedHandler = (e) => {
    console.log(e.target.value)
    setBreedSelect(e.target.value)
}

  const handleFetch = () => {

  }


  return <div className={classes.container}>
        <DogSelector selectDog={breedHandler}/> 
        <Button disabled={false} text="Show" onClick={handleFetch}/>

  </div>;
};

export default DogsBreed;

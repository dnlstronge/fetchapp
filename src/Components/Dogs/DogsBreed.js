/* this component should return a random dog pic by breed

[x] - create a seperate UI component to handle the drop-down*/

import React, { useState, useEffect } from "react";
import classes from "./DogsBreed.module.css";
import DogSelector from "../../UI/DogSelector";
import Button from "../../UI/Button";
import useFetch from "../../Hooks/useFetch"


const DogsBreed = () => {
  
  const [breedSelect, setBreedSelect] = useState(null)
  const [showBreed, setShowBreed] = useState(false)
  

const breedHandler = (e) => {
    console.log(e.target.value)
    const breed = e.target.value.trim().toLowerCase().replace(/ /g, "")
    setBreedSelect(breed)
}

const data = useFetch(`https://dog.ceo/api/breed/${breedSelect}/images/random/3`)
const handleFetch = () => {
  setShowBreed(!showBreed)
}

  return <div className={classes.container}>
        <DogSelector selectDog={breedHandler}/> 
        <Button disabled={false} text="Show" onClick={handleFetch}/>

  </div>;
};

export default DogsBreed;

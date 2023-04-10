/* this component should return a random dog pic by breed

[x] - create a seperate UI component to handle the drop-down*/

import React, { useState, useEffect } from "react";
import classes from "./DogsBreed.module.css";
import DogSelector from "../../UI/DogSelector";
import Button from "../../UI/Button";
import useFetch from "../../Hooks/useFetch";
import approvedDogs from "../../Data/AppovedDogs";

const DogsBreed = () => {
  const [breedSelect, setBreedSelect] = useState("cockapoo");
  const [showBreed, setShowBreed] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true)
  const [validURL, setValidURL] = useState(false)
  
  const validDog = approvedDogs;

  const breedHandler = (e) => {
    
    const breed = e.target.value.trim().toLowerCase().replace(/ /g, "");
    if(validDog.includes(breed)) {
      setValidURL(true)
    } else {setValidURL(false)}
    setBreedSelect(breed);
    setButtonDisable(false)
  };

  const dogs = useFetch(
    `https://dog.ceo/api/breed/${breedSelect}/images/random/3`
  , validURL);

  const handleShowDogs = () => {
    const element = document.getElementById("section");
    element.scrollIntoView({ behavior: "smooth", block: "end" })
    setShowBreed(!showBreed);
   
  };



  return (
    <>
      <div className={classes.container}>
      <section className={classes.sectionImages}>
      {dogs[0].loading &&
      <p className={classes.loadP}>Loading...</p>}
        {showBreed &&
          dogs[0].data.map((dog) => {
            return (
              <img
                key={dog}
                className={classes.images}
                src={dog}
                alt={breedSelect}
              />
            );
          })}
      </section>
        <DogSelector selectDog={breedHandler} />
        <Button disabled={buttonDisable} text="Show" onClick={handleShowDogs} />
      </div>
    
    
    </>
  );
};

export default DogsBreed;

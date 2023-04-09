/* this component should return a random dog pic by breed

[x] - create a seperate UI component to handle the drop-down*/

import React, { useState, useEffect } from "react";
import classes from "./DogsBreed.module.css";
import DogSelector from "../../UI/DogSelector";
import Button from "../../UI/Button";
import useFetch from "../../Hooks/useFetch";

const DogsBreed = () => {
  const [breedSelect, setBreedSelect] = useState(null);
  const [showBreed, setShowBreed] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true)

  const breedHandler = (e) => {
    console.log(e.target.value);
    const breed = e.target.value.trim().toLowerCase().replace(/ /g, "");
    setBreedSelect(breed);
  };

  const dogs = useFetch(
    `https://dog.ceo/api/breed/${breedSelect}/images/random/4`
  );

  const handleFetch = () => {
    setShowBreed(!showBreed);
    console.log(dogs);
  };

  return (
    <>
      <div className={classes.container}>
        <DogSelector selectDog={breedHandler} />
        <Button disabled={false} text="Show" onClick={handleFetch} />
      </div>
      <section className={classes.sectionImages}>
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
    </>
  );
};

export default DogsBreed;

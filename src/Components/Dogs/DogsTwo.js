import React, { useState, useEffect } from "react";
import classes from "./DogsTwo.module.css";
import Button from "../../UI/Button";
import useFetch from "../../Hooks/useFetch";

// url: "https://dog.ceo/api/breeds/image/random/3"

const DogsTwo = () => {
  //const [data, setData] = useState();
  const [data] = useFetch("https://dog.ceo/api/breeds/image/random/3") 
  const [dogs, setDogs] = useState(false)
  

useEffect(() => {
    console.log(data)
}, [data])

const buttonHandler = () => {
    setDogs(!dogs)
}


 
  return (
    <div className={classes.container}>
      <h4 className={classes.heading}>
        Dogs using custom hooks
        <p className={classes.para}>
          I've built this section to try out a custom hook I created to handle
          simple fetch requests and errors which fall outside of the fetch API.
          Upon button press It should return some dog images from the previously
          used free api.
        </p>
        <Button onClick={buttonHandler} text="Show me dogs"></Button>
        {data.isloading && 
        <p>Loading dogs...</p>}
        {dogs && data.data.length > 0 &&
        <section className={classes.sectionImages}>
          {data.data.map((dog) => {
            return <img className={classes.images} src={dog} alt="dog" />;
          })}
        </section>
      }
      </h4>
    </div>
  );
};

export default DogsTwo;

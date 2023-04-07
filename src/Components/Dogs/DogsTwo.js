import React, { useState, useEffect } from "react";
import classes from "./DogsTwo.module.css";
import Button from "../../UI/Button";
import useFetch from "../../Hooks/useFetch";

// url: "https://dog.ceo/api/breeds/image/random/3"

const DogsTwo = () => {
  //const [data, setData] = useState();
  const [data] = useFetch("https://dog.ceo/api/breeds/image/random/3");
  const [dogs, setDogs] = useState(false);

  

  const buttonHandler = () => {
    setDogs(!dogs);
  };

  return (
    <div className={classes.container}>
      <h4 className={classes.heading}>
        Dogs using custom hooks
        <p className={classes.para}>
          I've built this section to try out a custom hook I created to handle
          simple fetch requests and errors. This time the data is fetched upon
          render and whether they are displayed is subject to state. The dogs
          will be the same Dogs when the component is first rendered.
          <br></br>
          <br></br>
          Upon button press It returns some dog images from the previously used
          free api and using a custom hook.
        </p>
        <Button onClick={buttonHandler} text="Show me dogs"></Button>
        {data.loading && <p>Loading dogs...</p>}
        {dogs && data.data.length > 0 && (
          <section className={classes.sectionImages}>
            {data.data.map((dog) => {
              return <img className={classes.images} src={dog} alt="dog" />;
            })}
          </section>
        )}
      </h4>
    </div>
  );
};

export default DogsTwo;

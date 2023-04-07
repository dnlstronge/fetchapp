import React, { useState, useEffect } from "react";
import classes from "./DogsTwo.module.css";
import Button from "../../UI/Button";
import useFetch from "../../Hooks/useFetch";

// url: "https://dog.ceo/api/breeds/image/random/3"

const DogsTwo = () => {
  const [data, setData] = useState();
  const [response] = useFetch("https://dog.ceo/api/breeds/image/random/3") 



    useEffect(() => {
        console.log(response)
    }, [response])

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
        <Button text="Show me dogs"></Button>
      </h4>
    </div>
  );
};

export default DogsTwo;

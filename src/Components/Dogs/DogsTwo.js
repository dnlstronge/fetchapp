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
      <h4 className={classes.heading}>Dogs API II</h4>
      <div className={classes.content}>
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
        <p className={classes.subPara}>
            {`Url: `}
            <a
              target="blank"
              className={classes.subAnchor}
              href="https://jsonplaceholder.typicode.com/"
            >
              https://jsonplaceholder.typicode.com
            </a>
          </p>
          <p className={classes.subPara}>
            {`Code: `}
            <a
              target="blank"
              className={classes.subAnchor}
              href="https://github.com/dnlstronge/fetchapp/tree/master/src/Components/Dogs"
            >
              https://github.com/dnlstronge/fetchapp
            </a>
          </p>
          
        <Button onClick={buttonHandler} text="Show me dogs"></Button>
        </div>
        {data.loading && <p>Loading dogs...</p>}
        {dogs && data.data.length > 0 && (
          <section className={classes.sectionImages}>
            {data.data.map((dog) => {
              return <img key={dog} className={classes.images} src={dog} alt="dog" />;
            })}
          </section>
        )}
        
      
    </div>
  );
};

export default DogsTwo;

import React, { useState } from "react";
import classes from "./Dogs.module.css";
import Button from "../../UI/Button";
import ErrorComp from "../../UI/Errors/ErrorComp";

import getFive from "../../Logic/getFive";

/* For this fetch, I want the user to get rando pics of dogs on show me dogs.

gonna use: https://dog.ceo/dog-api/  */

/* first get an array of rando dogs (/number) */

const dogURL = "https://dog.ceo/api/breeds/image/random/3";
const fiveDOGS = getFive();

const Dogs = () => {
  const [dogs, setdogs] = useState(false);
  const [dogData, setDogData] = useState([]);
  const [error, setError] = useState({
    isError: false,
    status: null,
    msg: null,
  });
  const fetchDogs = async () => {
    try {
      const response = await fetch(dogURL);
      const data = await response.json();
      if (response?.ok) {
        setdogs(true);
        setError({ isError: false, status: null, msg: null });
        setDogData(data);
        console.log(data);
        //console.log(dogData)
      } else {
        setdogs(false);
        /* add useErrorHandler */
        setError({
          isError: true,
          status: response.status,
          msg: `Woofs....there has been a ${response.status} error.`,
        });
      }
    } catch (error) {
      setdogs(false);
      setError({ isError: true, status: error.status, msg: error.message });
    }
  };

  const handleDogs = () => {
    fetchDogs();
  };

  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <h4 className={classes.heading}>Dogs API</h4>
        <div className={classes.content}>
          <p className={classes.subPara}>
            This section uses a free dog images API to get a list of random dog
            images, then apply a randomizer logic and map the fetched dogs on
            screen.
            <br></br>
            <br></br>
            I've added error handling and loading state. User just needs to
            click a button to get some dogs. I hadn't tried mapping images much
            so this was interesting.
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
              href="https://github.com/dnlstronge/fetchapp/tree/master/src/Components/Users"
            >
              https://github.com/dnlstronge/fetchapp
            </a>
          </p>
          </div>
        
      </section>
      <section className={classes.btnsection}>
        <Button onClick={handleDogs} id="dogs" text="Show me Dogs" />
      </section>

      {dogs && (
        <section className={classes.sectionImages}>
          {dogData.message.map((dog) => {
            return <img className={classes.images} src={dog} alt="dog" />;
          })}
        </section>
      )}
      <ErrorComp status={error.status} msg={error.msg} />

      {/* Insert link logic and paras */}
    </div>
  );
};

export default Dogs;

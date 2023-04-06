import React, { useState } from "react";
import classes from "./Dogs.module.css";
import Button from "../../UI/Button";
import ErrorComp from "../../UI/Errors/ErrorComp";
import useErrorHandler from "../../Hooks/useErrorHandler";
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
      <h2 className={classes.sectionHead}>Who let the dogs out.....?</h2>
        <p className={classes.sectionPara}>
          In this section I used a free dogs API to get data. When the user
          clicks the button a fetch request gets random dog images and displays
          them to the user. The API provides 50 dogs, the app then returns and maps 5 at random
          when the user clicks the button</p>
          <section className={classes.btnsection}> 
            <Button onClick={handleDogs} id="dogs" text="Show me Dogs" />
          </section>
          
       
      {dogs && (
        <section>
          <img src={dogData.message[0]} alt="dog" />
          <p>{`Dogs be present at URL: ${dogData.message[1]}`}</p>
        </section>
      )}
      <ErrorComp status={error.status} msg={error.msg} />
      
      
        {/* Insert link logic and paras */}
     
      
    </div>
  );
};

export default Dogs;

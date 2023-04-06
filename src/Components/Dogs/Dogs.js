import React, { useState } from "react";
import classes from "./Dogs.module.css";
import Button from "../../UI/Button";
import ErrorComp from "../../UI/Errors/ErrorComp";
import useErrorHandler from "../../Hooks/useErrorHandler";

/* For this fetch, I want the user to get rando pics of dogs on show me dogs.

gonna use: https://dog.ceo/dog-api/  */

/* first get an array of rando dogs (/number) */

const dogURL = "https://dog.ceo/dog-api/50"

const Dogs = () => {
  const [error, setError] = useState({
    isError: false,
    status: null,
    msg: null
  })      
  const fetchDogs = async() => {
    try {
        const response = await fetch(dogURL)
        const data = await response.json()
        if(response?.ok) {
            setError({isError: false, status: null, msg: null})
            setDogData(data)
        } else {
            setError({isError: true, status: response.status, msg: `Woofs....there has been a ${response.status} error.`})
        }
    } catch (error) {
        setError({isError: true, status: error.status, msg: error.message})
    }
  }
  const [dogData, setDogData] = useState([]);

  return <div className={classes.container}>
    <ErrorComp status={error.status} msg={error.msg} />
  </div>;
};

export default Dogs;

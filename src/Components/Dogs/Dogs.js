import React, { useState } from "react";
import classes from "./Dogs.module.css";
import Button from "../../UI/Button";
import ErrorComp from "../../UI/Errors/ErrorComp";
import useErrorHandler from "../../Hooks/useErrorHandler";

/* For this fetch, I want the user to get rando pics of dogs on show me dogs.

gonna use: https://dog.ceo/dog-api/  */

const Dogs = () => {
  const [dogData, setDogData] = useState([]);

  return <div className={classes.container}></div>;
};

export default Dogs;

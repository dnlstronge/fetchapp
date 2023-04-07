import React from "react";
import classes from "./DogsTwo.module.css"
import Button from "../../UI/Button";

const DogsTwo = () => {
    return (
        
        <div className={classes.container}>
            <h4 className={classes.heading}>Dogs using custom hooks
            <p className={classes.para}>I've built this section to try out a custom hook I created
            to handle simple fetch requests and errors which fall outside of the fetch API. Upon button press
            It should return some dog images from the previously used free api.</p></h4>
             <Button text="Show me dogs"></Button>
        </div>
       
    )
}

export default DogsTwo;
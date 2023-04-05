import React from "react";
import classes from "./Button.module.css"



/*


Button Props Config: 

onClick: onClick (points to handker)
id: "user API" (points to what its use is)
text: "Input text"


*/

const Button = ({onClick, id, text}) => {
    return (
        <button id={id} className={classes.btn} onClick={onClick}>{text}</button>
    )
}

export default Button; 
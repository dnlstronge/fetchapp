import React from "react";
import classes from "./Button.module.css"



/*


Button Props Config: 

onClick: onClick (points to handler)
id: "user API" (points to what its use is)
text: "Input text"
disabled: "true/false"


*/

const Button = ({onClick, id, text, disabled}) => {
    return (
        <button disabled={disabled} id={id} className={classes.btn} onClick={onClick}>{text}</button>
    )
}

export default Button; 
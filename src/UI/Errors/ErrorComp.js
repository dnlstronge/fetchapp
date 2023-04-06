import React from "react"; 
import classes from "./ErrorComp.module.css"

/* config:

msg: {error.msg}
status: {error.status}

*/

const Error = ({msg, status}) => {
    return (
        <div className={classes.container}>
            <h2 className={classes.head}>{status}</h2>
            <p className={classes.msg}>{msg}</p>
      </div>
    )
}
export default Error
import React from "react";
import classes from "./Home.module.css"



const Home = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.heading}>Welcome my fetching funhouse</h2>
            <secion className={classes.section}>
                <p className={classes.sectionPara}>I built this app to play around with different APIs. It makes use of various
                open-source collections of data. Basicallly I wanted a simple platform on which I could
                freely implement code and manipulate different data sets form sources online and also 
                have a bit of fun with it.
                <br></br><br></br>
                While I have gotten comfortable with a fair few aspects of react, I felt that 
                I hadn't haven't done enough work with APIs in general, so this app really serves as an environment
                in which to further develop my skills and a place to showcase what I have learned.</p>
            </secion>
        </div>
    )
}
export default Home;
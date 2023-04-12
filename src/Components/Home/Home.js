import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Fetching Funhouse</h2>
      <section className={classes.section}>
        <p className={classes.sectionPara}>
          I built this app to play around with different APIs. It makes use of
          various open-source collections of data. Basicallly I wanted a simple
          platform on which I could freely implement code and manipulate
          different data sets form sources online and also have a bit of fun
          with it.
          <br></br>
          <br></br>I wanted to gain more experience working with APIs in general
          and this app serves as an environment in which to develop my skills as
          well as a place to showcase what I have learned.
        </p>
      </section>
    </div>
  );
};
export default Home;

import { Typography } from "@material-ui/core";
import React from "react";

import AboutUsImg from "../assets/usThree01.svg";
import { useStyles } from "../styles/styles";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Typography variant="h5" component="h5">
        About Us
      </Typography> */}
      <img
        src={AboutUsImg}
        alt="about us"
        height="90%"
        width="90%"
        style={{ padding: "2%" }}
      />
      <div className={classes.aboutUsText}>
        <Typography variant="h6" component="h6">
          Greetings 😸! Ourself, Avinash S, Deeba K, and Subrato G. This project
          is for our College Competition. The idea was to provide a simple
          method for converting Image Documents into Digital ones.
        </Typography>
      </div>
    </>
  );
};

export default AboutUs;

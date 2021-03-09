import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";

import "./styles/App.css";
import uploadImageSVG from "./assets/uploadImage.svg";
import TextifiedOutput from "./components/textifiedOutput";
import Uploader from "./components/uploader";
import Activity from "./components/activity";
import AppInfo from "./components/appInfo";
import AboutUs from "./components/aboutUs";
import { useStyles } from "./styles/styles";

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            src={uploadImageSVG}
            alt="highlight"
            height="90%"
            width="90%"
            style={{ padding: "2%" }}
          />
          <div className={classes.text}>
            <Typography variant="h5">Textify Your Image ✌</Typography>
          </div>
          <div>
            <Activity />
          </div>
          <div className={classes.uploader}>
            <Uploader />
          </div>
          <div className={classes.returnedText}>
            <TextifiedOutput />
          </div>
        </div>
        <div className={classes.paper}>
          <AboutUs />
        </div>
        <div className={classes.appInfoPaper}>
          <AppInfo />
        </div>
      </Container>
    </>
  );
};

export default App;

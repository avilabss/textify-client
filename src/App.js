import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";

import "./styles/App.css";
import uploadImageSVG from "./assets/uploadImage.svg";
import TextifiedOutput from "./components/textifiedOutput";
import Uploader from "./components/uploader";

import { useStyles } from "./styles/styles";

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.avatar}>
            <img
              src={uploadImageSVG}
              alt="highlight"
              height="90%"
              width="90%"
            />
          </div>
          <div className={classes.text}>
            <Typography variant="h6">Textify Your Image</Typography>
          </div>
          <Uploader />
          <div className={classes.returnedText}>
            <TextifiedOutput />
          </div>
        </div>
      </Container>
    </>
  );
};

export default App;

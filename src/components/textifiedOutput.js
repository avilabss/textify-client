import React from "react";
import { Typography, CircularProgress } from "@material-ui/core";
// import { FileCopyRounded } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useStyles } from "../styles/styles";

const TextifiedOutput = () => {
  const outText = useSelector((state) => state.outText);
  const loading = useSelector((state) => state.loading);
  const classes = useStyles();

  const Loader = () => {
    return (
      <div className={classes.loader}>
        <CircularProgress color="inherit" />
      </div>
    );
  };

  const TextOut = () => {
    return (
      <div>
        <Typography variant="h6" paragraph>
          {outText}
        </Typography>
      </div>
    );
  };

  return <>{loading ? <Loader /> : <TextOut />}</>;
};

export default TextifiedOutput;

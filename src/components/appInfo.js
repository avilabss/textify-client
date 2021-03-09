import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
// import { useStyles } from "../styles/styles";

const AppInfo = () => {
  //   const classes = useStyles();

  return (
    <>
      <Typography variant="h6" component="h6">
        We 🖤 Open-Source
      </Typography>
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <Typography variant="body1" component="h6">
            <Link
              color="inherit"
              onClick={() =>
                window.open("https://github.com/git-avinash/textify-server")
              }
            >
              Server
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="h6">
            <Link
              color="inherit"
              onClick={() =>
                window.open("https://github.com/git-avinash/textify-client")
              }
            >
              App
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AppInfo;

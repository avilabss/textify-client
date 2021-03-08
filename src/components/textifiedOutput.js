import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const TextifiedOutput = () => {
  const outText = useSelector((state) => state.outText);
  return (
    <Typography variant="h5" paragraph>
      {outText}
    </Typography>
  );
};

export default TextifiedOutput;

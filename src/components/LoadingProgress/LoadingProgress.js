import { CircularProgress } from "@material-ui/core";
import React from "react";
import useStyles from "./LoadingProgressStyles";

function LoadingProgress() {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <CircularProgress data-testid="loader" className={classes.loading} />
    </div>
  );
}

export default LoadingProgress;

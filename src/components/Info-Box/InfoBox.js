import React from "react";
import InfoItem from "./InfoItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
});

function InfoBox() {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      {[...Array(5)].map((_, index) => (
        <InfoItem key={index} />
      ))}
    </div>
  );
}

export default InfoBox;

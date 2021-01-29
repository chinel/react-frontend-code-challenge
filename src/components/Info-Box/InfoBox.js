import React from "react";
import useStyles from "./InfoBoxStyles";
import InfoItem from "./InfoItem";

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

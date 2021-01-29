import { Card } from "@material-ui/core";
import React from "react";
import InfoIcon from "../../assets/images/info-icon.svg";
import useStyles from "./InfoItemStyles";

function InfoItem({ title, total }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.content}>
        <h3 className={classes.cardTitle}>{total} </h3>
        <p className={classes.cardSubTitle}>
          <span style={{ textTransform: "capitalize" }}>{title}</span> metric
        </p>
      </div>
      <div>
        <img src={InfoIcon} alt="info" />
      </div>
    </Card>
  );
}

export default InfoItem;

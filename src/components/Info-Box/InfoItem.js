import { Card, makeStyles } from "@material-ui/core";
import React from "react";
import InfoIcon from "../../assets/images/info-icon.svg";

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 15px 12px 15px",
    margin: "10px",
    flex: "1 0 18%",
    boxShadow: "0px 4px 30px rgba(192, 192, 192, 0.25)",
    borderRadius: "6px",
    "&:first-child": {
      marginLeft: "0px",
    },
    "&:last-child": {
      marginRight: "0px",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginTop: "-6px",
  },
  cardTitle: {
    fontSize: "32px",
    lineHeight: "44px",
    fontFamily: "Product Sans Bold",
    letterSpacing: "-0.44px",
    color: "#19191D",
    margin: "0px",
  },
  cardSubTitle: {
    fontSize: "16px",
    lineHeight: "36px",
    color: "#9696A0",
    fontFamily: "Product Sans Bold",
    margin: "0px",
  },
});

function InfoItem() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.content}>
        <h3 className={classes.cardTitle}>2344</h3>
        <p className={classes.cardSubTitle}>Past metric</p>
      </div>
      <div>
        <img src={InfoIcon} alt="info" />
      </div>
    </Card>
  );
}

export default InfoItem;

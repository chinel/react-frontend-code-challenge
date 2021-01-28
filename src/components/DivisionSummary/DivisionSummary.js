import React from "react";
import {
  Card,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  divisionSummary: {
    marginBottom: "20px",
    boxShadow: "0px 4px 30px rgba(192, 192, 192, 0.25)",
    borderRadius: "6px",
    paddingBottom: "5px",

    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:960px)"]: {
      flexBasis: "50%",
    },
  },
  listIconMain: {
    minWidth: "auto",
    marginRight: "10px",
  },
  divisionTitle: {
    "& span": {
      fontSize: "14px",
      fontFamily: "Product Sans Bold",
      color: "#000000",
    },
  },
  divisionSummaryDetails: {
    "& ul>li": {
      paddingTop: "2px",
      paddingBottom: "2px",
    },
  },
  divisionSummaryHeader: {
    paddingBottom: "0px",
  },

  detailIcon: {
    minWidth: "auto",
    marginRight: "10px",
  },
  detailText: {
    "& span": {
      fontSize: "14px",
      color: "#0F1A4F",
    },
  },
  detailList: {
    backgroundColor: "red",
    paddingTop: "1px!important",
    paddingBottom: "1px!important",
  },
  detailLink: {
    color: "#5771EE",
    textDecoration: "underline",
  },
});

function DivisionSummary() {
  const classes = useStyles();
  return (
    <Card className={classes.divisionSummary}>
      <List className={classes.divisionSummaryHeader}>
        <ListItem>
          <ListItemIcon className={classes.listIconMain}>
            <img src="/images/icon.png" alt="division" />
          </ListItemIcon>
          <ListItemText
            primary="Division Summary"
            className={classes.divisionTitle}
          />
        </ListItem>
      </List>
      <div className={classes.divisionSummaryDetails}>
        <List>
          <ListItem classeName={classes.detailList}>
            <ListItemIcon className={classes.detailIcon}>
              <img src="/images/phone.png" alt="division" />
            </ListItemIcon>
            <ListItemText
              primary="0801 234 5678"
              className={classes.detailText}
            />
          </ListItem>
          <ListItem classeName={classes.detailList}>
            <ListItemIcon className={classes.detailIcon}>
              <img src="/images/envelope.png" alt="division" />
            </ListItemIcon>
            <ListItemText
              primary="asbfefr@gmail.com"
              className={classes.detailText}
            />
          </ListItem>
          <ListItem classeName={classes.detailList}>
            <ListItemIcon className={classes.detailIcon}>
              <img src="/images/pin.png" alt="division" />
            </ListItemIcon>
            <ListItemText
              primary="Mojidi, Lagos"
              className={classes.detailText}
            />
          </ListItem>
          <ListItem classeName={classes.detailList}>
            <ListItemIcon className={classes.detailIcon}>
              <img src="/images/notes-book 1.png" alt="division" />
            </ListItemIcon>

            <Link
              color="inherit"
              href="/"
              className={`${classes.detailLink} ${classes.detailText}`}
            >
              2 Journal entries
            </Link>
          </ListItem>
          <ListItem classeName={classes.detailList}>
            <ListItemIcon className={classes.detailIcon}>
              <img src="/images/Group-1800.png" alt="division" />
            </ListItemIcon>
            <ListItemText
              primary="24 fingerprints enrolled"
              className={classes.detailText}
            />
          </ListItem>
        </List>
      </div>
    </Card>
  );
}

export default DivisionSummary;

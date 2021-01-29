import React from "react";
import {
  Card,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import useStyles from "./DivisionSummaryStyles";

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
          <ListItem className={classes.detailList}>
            <ListItemIcon className={classes.detailIcon}>
              <img src="/images/phone.png" alt="division" />
            </ListItemIcon>
            <ListItemText
              primary="0801 234 5678"
              className={classes.detailText}
            />
          </ListItem>
          <ListItem className={classes.detailList}>
            <ListItemIcon className={classes.detailIcon}>
              <img src="/images/envelope.png" alt="division" />
            </ListItemIcon>
            <ListItemText
              primary="asbfefr@gmail.com"
              className={classes.detailText}
            />
          </ListItem>
          <ListItem className={classes.detailList}>
            <ListItemIcon className={classes.detailIcon}>
              <img src="/images/pin.png" alt="division" />
            </ListItemIcon>
            <ListItemText
              primary="Mojidi, Lagos"
              className={classes.detailText}
            />
          </ListItem>
          <ListItem className={classes.detailList}>
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
          <ListItem className={classes.detailList}>
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

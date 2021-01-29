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
import { useQuery } from "@apollo/client";
import { GET_DIVISION_SUMMARY } from "../../graphql-endpoint/queries";
import { LoadingProgress } from "..";

function DivisionSummary() {
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_DIVISION_SUMMARY);

  if (loading) {
    return <LoadingProgress />;
  }

  if (error) return <div>Error fetching Metrics</div>;

  console.log("division", data);

  return (
    data.division_summary && (
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
                primary={data.division_summary[0].phone}
                className={classes.detailText}
              />
            </ListItem>
            <ListItem className={classes.detailList}>
              <ListItemIcon className={classes.detailIcon}>
                <img src="/images/envelope.png" alt="division" />
              </ListItemIcon>
              <ListItemText
                primary={data.division_summary[0].email}
                className={classes.detailText}
              />
            </ListItem>
            <ListItem className={classes.detailList}>
              <ListItemIcon className={classes.detailIcon}>
                <img src="/images/pin.png" alt="division" />
              </ListItemIcon>
              <ListItemText
                primary={data.division_summary[0].address}
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
                {data.division_summary[0].journals} Journal entries
              </Link>
            </ListItem>
            <ListItem className={classes.detailList}>
              <ListItemIcon className={classes.detailIcon}>
                <img src="/images/Group-1800.png" alt="division" />
              </ListItemIcon>
              <ListItemText
                primary={`${data.division_summary[0].fingerprints} fingerprints enrolled`}
                className={classes.detailText}
              />
            </ListItem>
          </List>
        </div>
      </Card>
    )
  );
}

export default DivisionSummary;

import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab";
import useStyles from "./ModuleHistoryStyles";
import { useQuery } from "@apollo/client";
import { GET_MODULE_HISTORY } from "../../graphql-endpoint/queries";
import { LoadingProgress } from "..";

function ModuleHistory() {
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_MODULE_HISTORY);

  if (loading) {
    return <LoadingProgress />;
  }

  if (error) return <div>Error fetching Module History</div>;

  return (
    data.module_history && (
      <div className={classes.moduleHistoryWrapper}>
        <List className={classes.moduleHistoryHeader}>
          <ListItem>
            <ListItemIcon className={classes.listIconMain}>
              <img src="/images/icon-2.png" alt="module History" />
            </ListItemIcon>
            <ListItemText
              primary="Module History"
              className={classes.moduleHistoryTitle}
            />
          </ListItem>
        </List>
        <Timeline className={classes.moduleHistoryTimeline}>
          {data.module_history.map((value) => (
            <TimelineItem className={classes.itemList}>
              <TimelineSeparator className={classes.moduleSeparator}>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <Typography className={classes.timelineHeader}>
                    {value.description}
                  </Typography>
                  <Typography className={classes.timelineContent}>
                    {value.date} <span>.</span> {value.source}
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    )
  );
}

export default ModuleHistory;

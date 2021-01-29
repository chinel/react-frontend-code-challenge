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

function ModuleHistory() {
  const classes = useStyles();
  return (
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
        <TimelineItem className={classes.itemList}>
          <TimelineSeparator className={classes.moduleSeparator}>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <Typography className={classes.timelineHeader}>
                Searched “Journal Entries” on Division module
              </Typography>
              <Typography className={classes.timelineContent}>
                22:10 15/09/2020 <span>.</span> Web
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={classes.itemList}>
          <TimelineSeparator className={classes.moduleSeparator}>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <Typography className={classes.timelineHeader}>
                Searched “Fingerprint record” on Division module
              </Typography>
              <Typography className={classes.timelineContent}>
                22:10 15/09/2020 <span>.</span> Web
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={classes.itemList}>
          <TimelineSeparator className={classes.moduleSeparator}>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <Typography className={classes.timelineHeader}>
                Searched “Journal Entries” on Division module
              </Typography>
              <Typography className={classes.timelineContent}>
                22:10 15/09/2020 <span>.</span> Web
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default ModuleHistory;

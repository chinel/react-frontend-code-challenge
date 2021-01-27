import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
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

const useStyles = makeStyles({
  moduleHistoryHeader: {
    paddingBottom: "0px",
  },

  listIconMain: {
    minWidth: "auto",
    marginRight: "10px",
  },
  moduleHistoryTitle: {
    "& span": {
      fontSize: "14px",
      fontFamily: "Product Sans Bold",
      color: "#000000",
    },
  },
  itemList: {
    "&:before": {
      content: "none",
    },
  },
  moduleHistoryTimeline: {
    padding: "0px 16px",
  },
  moduleSeparator: {
    "& span:nth-of-type(2)": {
      backgroundColor: "transparent",
      border: "1px dashed #C4C4C4",
    },
  },
  timelineHeader: {
    fontFamily: "Product Sans Bold",
    fontSize: "12px",
    lineHeight: "17px",
    color: "#747474",
  },
  timelineContent: {
    fontFamily: "Product Sans Bold",
    fontSize: "12px",
    lineHeight: "17px",
    color: "#A1AACE",
    marginTop: "10px",

    "& span": {
      fontSize: "30px",
      display: "inlineBlock",
      position: "relative",
      top: "-1px",
    },
  },
});

function ModuleHistory() {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}

export default ModuleHistory;

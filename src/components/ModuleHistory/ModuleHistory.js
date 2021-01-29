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
  moduleHistoryWrapper: {
    // eslint-disable-next-line no-useless-computed-key
    ["@media screen and (max-width: 1034px) and (min-width: 600px)"]: {
      flexBasis: "50%",
    },
    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:599px)"]: {
      flexBasis: "100%",
    },
  },
  moduleHistoryHeader: {
    paddingBottom: "0px",

    "& li": {
      // eslint-disable-next-line no-useless-computed-key
      ["@media screen and (max-width: 599px)"]: {
        paddingLeft: "2px",
      },
    },
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
    padding: "0px 0px 0px 16px",

    // eslint-disable-next-line no-useless-computed-key
    ["@media screen and (max-width: 599px)"]: {
      padding: "0px 0px 0px 0px",
    },
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
      fontSize: "20px",
      display: "inlineBlock",
      position: "relative",
      top: "-3px",
    },
  },
});

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

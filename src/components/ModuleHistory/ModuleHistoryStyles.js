import { makeStyles } from "@material-ui/core";

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

    "& li div>span": {
      backgroundColor: "#707070",
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

export default useStyles;

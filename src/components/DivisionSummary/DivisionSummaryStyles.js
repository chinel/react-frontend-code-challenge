import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  divisionSummary: {
    marginBottom: "20px",
    boxShadow: "0px 4px 30px rgba(192, 192, 192, 0.25)",
    borderRadius: "6px",
    paddingBottom: "5px",

    // eslint-disable-next-line no-useless-computed-key
    ["@media screen and (max-width: 1034px) and (min-width: 600px)"]: {
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
      fontWeight: "400",
      fontFamily: "Product Sans Medium Regular",
    },
  },
  detailList: {
    paddingTop: "5px!important",
    paddingBottom: "5px!important",
  },
  detailLink: {
    color: "#5771EE",
    textDecoration: "underline",
    fontFamily: "Product Sans Medium Regular",
  },
});

export default useStyles;

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  pageWrapper: {
    marginTop: "65px",
    paddingLeft: "32px",
    paddingRight: "32px",

    // eslint-disable-next-line no-useless-computed-key
    ["@media screen and (max-width: 600px)"]: {
      paddingLeft: "27px",
      paddingRight: "27px",
    },
  },
  pageContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "9px",
  },
  leftBar: {
    flexBasis: "18.6%",
    marginRight: "5px",

    // eslint-disable-next-line no-useless-computed-key
    ["@media screen and (max-width: 1034px) and (min-width: 961px)"]: {
      flex: "1 1 100%",
      margin: "10px 0px 10px 0px",
      display: "flex",
      flexDirection: "row",
    },

    // eslint-disable-next-line no-useless-computed-key
    ["@media screen and (max-width: 960px) and (min-width: 600px)"]: {
      flex: "1 1 100%",
      margin: "10px 0px 10px 0px",
      display: "flex",
      flexDirection: "row",
    },
    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:599px)"]: {
      flex: "1 1 100%",
      flexDirection: "column",
    },
  },
  rightBar: {
    flexBasis: "79.7%",
    marginLeft: "10px",
    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:1034px)"]: {
      flexBasis: "100%",
      marginLeft: "0px",
    },
  },
});

export default useStyles;

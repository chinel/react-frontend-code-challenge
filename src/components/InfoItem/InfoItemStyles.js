import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 15px 12px 15px",
    margin: "10px",
    flex: "1 0 18%",
    boxShadow: "0px 4px 30px rgba(192, 192, 192, 0.25)",
    borderRadius: "6px",
    "&:first-child": {
      marginLeft: "0px",
    },
    "&:last-child": {
      marginRight: "0px",
    },
    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:960px)"]: {
      flex: "1 0 100%",
      margin: "10px 0px 10px 0px",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginTop: "-6px",
  },
  cardTitle: {
    fontSize: "32px",
    lineHeight: "44px",
    fontFamily: "Product Sans Bold",
    letterSpacing: "-0.44px",
    color: "#19191D",
    margin: "0px",
  },
  cardSubTitle: {
    fontSize: "16px",
    lineHeight: "36px",
    color: "#9696A0",
    fontFamily: "Product Sans Bold",
    margin: "0px",
  },
}));

export default useStyles;

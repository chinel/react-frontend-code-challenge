import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
    marginTop: "52px",
  },
  fullList: {
    width: "auto",
  },
  mobileDropdownMenu: {
    color: "#778699",
    "&>div": {
      paddingLeft: "29px",
      paddingBottom: "12px",
      paddingTop: "12px",
    },
    "& div>span": {
      fontSize: "14px",
      fontFamily: "Product Sans Medium Regular",
      fontWeight: "400",
    },
    "& div>svg path": {
      fill: "#72809D",
    },
    "&>div:hover": {
      backgroundColor: "#DEEFFF",
      color: "#006FD6",

      "& div>svg path": {
        fill: "#006FD6",
      },
    },
  },
  activeMenu: {
    backgroundColor: "#DEEFFF",
    color: "#006FD6",
    paddingBottom: "13px",
    paddingTop: "20px",
    "& div>svg path": {
      fill: "#006FD6",
    },
  },
});

export default useStyles;

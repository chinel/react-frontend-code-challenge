import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  breadCrumb: {
    marginBottom: "5px",
  },
  link: {
    color: "#778699",
    fontSize: "14px",
    fontFamily: "Product Sans Medium Regular",
    fontWeight: "400",
    "&:hover": {
      textDecoration: "none",
      color: "#006FD6",
    },
  },
  breadCrumbSeparator: {
    marginLeft: "0px",
    marginRight: "0px",
  },
}));

export default useStyles;

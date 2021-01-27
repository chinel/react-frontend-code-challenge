import React from "react";
import { makeStyles, Breadcrumbs, Typography, Link } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  breadCrumb: {
    marginBottom: "20px",
  },
  link: {
    color: "#778699",
    fontSize: "14px",
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

function BreadCrumb(props) {
  const classes = useStyles();
  return (
    <div className={classes.breadCrumb}>
      <Breadcrumbs
        separator={
          <NavigateNextIcon
            fontSize="small"
            className={classes.breadCrumbSeparator}
            style={{ color: "#0A5685" }}
          />
        }
        aria-label="breadcrumb"
      >
        <Link color="inherit" href="/" className={classes.link}>
          Divisions
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          className={classes.link}
        >
          Modules
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumb;

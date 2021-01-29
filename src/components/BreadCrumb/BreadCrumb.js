import React from "react";
import { Breadcrumbs, Link } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import useStyles from "./BreadCrumbStyles";

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
        <Link color="inherit" href="#" className={classes.link}>
          Modules
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumb;

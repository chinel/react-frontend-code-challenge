import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import {
  BreadCrumb,
  DivisionSummary,
  Header,
  InfoBox,
  ModuleHistory,
  TableSummary,
} from "./components";

const useStyles = makeStyles({
  pageWrapper: {
    marginTop: "65px",
    paddingLeft: "32px",
    paddingRight: "32px",
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
  },
  rightBar: {
    flexBasis: "79.7%",
    marginLeft: "10px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.pageWrapper}>
        <BreadCrumb />
        <InfoBox />
        <div className={classes.pageContent}>
          <div className={classes.leftBar}>
            <DivisionSummary />
            <ModuleHistory />
          </div>
          <div className={classes.rightBar}>
            <TableSummary />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

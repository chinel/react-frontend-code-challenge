import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import {
  BreadCrumb,
  DivisionSummary,
  Header,
  ModuleHistory,
  TableSummary,
} from "./components";

const useStyles = makeStyles({
  pageWrapper: {
    marginTop: "70px",
    paddingLeft: "32px",
    paddingRight: "32px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <Header />

      <div className={classes.pageWrapper}>
        <BreadCrumb />
        <Grid container space={3}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Grid>
        <Grid container space={3}>
          <Grid item xs={12} md={12} lg={3}>
            <DivisionSummary />
            <ModuleHistory />
          </Grid>
          <Grid item xs={12} md={12} lg={9}>
            <TableSummary />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;

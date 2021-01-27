import React from "react";
import { Grid } from "@material-ui/core";
import {
  DivisionSummary,
  Header,
  ModuleHistory,
  TableSummary,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "100px" }}>
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

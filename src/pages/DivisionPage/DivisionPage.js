import React from "react";
import { BreadCrumb, DivisionSummary, InfoBox, ModuleHistory, TableSummary } from "../../components";
import useStyles from "./DivisionPageStyles";

function DivisionPage() {
  const classes = useStyles();
  return (
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
  );
}

export default DivisionPage;

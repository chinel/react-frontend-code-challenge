import React from "react";
import {
  BreadCrumb,
  DivisionSummary,
  InfoBox,
  ModuleHistory,
  TableSummary,
} from "../../components";
import useStyles from "./DivisionPageStyles";

function DivisionPage() {
  const classes = useStyles();
  return (
    <div className={classes.pageWrapper}>
      {/*-------------- BREADCRUMB COMPONENT ---------------- */}
      <BreadCrumb />
      {/* ---------- INFOBOX COMPONENT ---------------- */}
      <InfoBox />
      <div className={classes.pageContent}>
        {/*  ------------ THE DIVISION SUMMARY  AND MODULE HISTORY COMPONENT ON THE LEFT HAND SIDE ---------------- */}
        <div className={classes.leftBar}>
          <DivisionSummary />
          <ModuleHistory />
        </div>
        {/* ----------- THE TABLE SUMMARY COMPONENT ON THE RIGHT SIDE ----------------*/}
        <div className={classes.rightBar}>
          <TableSummary />
        </div>
      </div>
    </div>
  );
}

export default DivisionPage;

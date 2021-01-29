import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  BreadCrumb,
  DivisionSummary,
  Header,
  InfoBox,
  ModuleHistory,
  TableSummary,
  MobileNav,
  NotificationBar,
} from "./components";
import useStyles from "./MainStyles";

function App() {
  const classes = useStyles();
  const [status, setStatus] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (slide) => {
    setStatus((prevState) => ({ ...prevState, [slide]: false }));
  };

  const openDrawer = (slide) => {
    setStatus((prevState) => ({
      ...prevState,
      [slide]: true,
    }));
  };
  return (
    <>
      <Header toggleDrawer={openDrawer} />
      <MobileNav status={status} toggleDrawerHandler={toggleDrawer} />
      <NotificationBar status={status} toggleDrawerHandler={toggleDrawer} />
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

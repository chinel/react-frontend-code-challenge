import React from "react";
import { Header, MobileNav, NotificationBar } from "./components";
import { DivisionPage } from "./pages";

function App() {
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
      {/* --------- HEADER -------------------- */}
      <Header toggleDrawer={openDrawer} />
      {/*-------------- MOBILE NAV BAR --------------------*/}
      <MobileNav status={status} toggleDrawerHandler={toggleDrawer} />
      {/*-------------- NOTIFICATION MENU BAR --------------------*/}
      <NotificationBar status={status} toggleDrawerHandler={toggleDrawer} />

      {/* ---------------- MAIN PAGE CONENT -------------------------------- */}
      <DivisionPage />
    </>
  );
}

export default App;

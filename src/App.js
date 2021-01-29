import React from "react";
import { Header, MobileNav, NotificationBar } from "./components";
import { DivisionPage } from "./pages";

function App() {
  //This state keeps track of the opening and closing of the mobile nav and notification nav
  const [status, setStatus] = React.useState({
    left: false,
    right: false,
  });

  //This method hides the navigation or mobile menu on toggle of the respective buttons
  const toggleDrawer = (slide) => {
    setStatus((prevState) => ({ ...prevState, [slide]: false }));
  };

  //This method toggles the reveal the mobile menu or navigation menu on click of the respective buttons
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

      {/* ---------------- MAIN PAGE CONENT (DIVISION PAGE)-------------------------------- */}
      <DivisionPage />
    </>
  );
}

export default App;

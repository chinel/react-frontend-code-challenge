import React from "react";
import { render } from "@testing-library/react";
import useStyles from "../../components/NotificationBar/NotificationBarStyles";

function checkStyles() {
  let values;

  function MockedComponent() {
    values = useStyles();
    return null;
  }
  render(<MockedComponent />);
  return values;
}

describe("<NotificationBar/>", () => {
  it("renders the <NotificationBar/> with populated data", () => {});
  it("validate the return values of useStyles hook", () => {
    const validateStlyes = checkStyles();

    expect(validateStlyes.list).toBeTruthy();
  });
});

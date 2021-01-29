import React from "react";
import { render } from "@testing-library/react";
import useStyles from "../../components/ModuleHistory/ModuleHistoryStyles";

function checkStyles() {
  let values;

  function MockedComponent() {
    values = useStyles();
    return null;
  }
  render(<MockedComponent />);
  return values;
}

describe("<ModuleHistory/>", () => {
  it("renders the <ModuleHistory/> with populated data", () => {});

  it("validate the return values of useStyles hook", () => {
    const validateStlyes = checkStyles();

    expect(validateStlyes.moduleHistoryWrapper).toBeTruthy();
  });
});

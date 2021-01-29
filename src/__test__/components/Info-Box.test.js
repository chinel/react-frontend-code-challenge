import React from "react";
import { render } from "@testing-library/react";
import useStyles from "../../components/Info-Box/InfoBoxStyles";

function checkStyles() {
  let values;

  function MockedComponent() {
    values = useStyles();
    return null;
  }
  render(<MockedComponent />);
  return values;
}

describe("<InfoBox/>", () => {
  it("renders the <InfoBox/> with populated data", () => {});

  it("validate the return values of useStyles hook", () => {
    const validateStlyes = checkStyles();

    expect(validateStlyes.cardContainer).toBeTruthy();
  });
});

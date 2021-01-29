import React from "react";
import { render } from "@testing-library/react";
import useStyles from "../../components/BreadCrumb/BreadCrumbStyles";
import { BreadCrumb } from "../../components";

function checkStyles() {
  let values;

  function MockedComponent() {
    values = useStyles();
    return null;
  }
  render(<MockedComponent />);
  return values;
}

describe("<BreadCrumb/>", () => {
  it("renders the <BreadCrumb with populated data", () => {
    const { container, getByText } = render(<BreadCrumb />);

    expect(getByText("Divisions")).toBeTruthy();
    expect(getByText("Modules")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("validate the return values of useStyles hook", () => {
    const validateStlyes = checkStyles();

    expect(validateStlyes.breadCrumb).toBeTruthy();
  });
});

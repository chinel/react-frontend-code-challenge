import React from "react";
import { render } from "@testing-library/react";
import useStyles from "../../components/Header/HeaderStyles";
import { Header } from "../../components";
function checkStyles() {
  let values;

  function MockedComponent() {
    values = useStyles();
    return null;
  }
  render(<MockedComponent />);
  return values;
}

describe("<Header/>", () => {
  it("renders the <Header/> with populated data", () => {
    const { container, getByText } = render(<Header />);

    expect(getByText("FE Engineer Test")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("validate the return values of useStyles hook", () => {
    const validateStlyes = checkStyles();

    expect(validateStlyes.menuBar).toBeTruthy();
  });
});

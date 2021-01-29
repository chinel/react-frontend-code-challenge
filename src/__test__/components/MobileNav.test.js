import React from "react";
import { render } from "@testing-library/react";
import useStyles from "../../components/MobileNav/MobileNavStyles";
import { MobileNav } from "../../components";

function checkStyles() {
  let values;

  function MockedComponent() {
    values = useStyles();
    return null;
  }
  render(<MockedComponent />);
  return values;
}

describe("<MobileNav/>", () => {
  it("renders the <MobileNav/> with populated data", () => {
    const { container, queryByText } = render(
      <MobileNav toggleDrawerHandler={() => {}} status={{ status: "left" }} />
    );

    expect(queryByText("Divisions")).toBeFalsy();
    expect(queryByText("Entries")).toBeFalsy();
    expect(queryByText("Home")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("validate the return values of useStyles hook", () => {
    const validateStlyes = checkStyles();

    expect(validateStlyes.list).toBeTruthy();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import useStyles from "../../components/LoadingProgress/LoadingProgressStyles";
import { LoadingProgress } from "../../components";

function checkStyles() {
  let values;

  function MockedComponent() {
    values = useStyles();
    return null;
  }
  render(<MockedComponent />);
  return values;
}

describe("<LoadingProgress/>", () => {
  it("renders the <LoadingProgress/> with populated data", () => {
    const { container, getByTestId } = render(<LoadingProgress />);

    expect(getByTestId("loader")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("validate the return values of useStyles hook", () => {
    const validateStlyes = checkStyles();

    expect(validateStlyes.loading).toBeTruthy();
  });
});

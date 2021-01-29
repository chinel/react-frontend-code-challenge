import React from "react";
import { render } from "@testing-library/react";
import useStyles from "../../components/InfoItem/InfoItemStyles";
import InfoItem from "../../components/InfoItem/InfoItem";

function checkStyles() {
  let values;

  function MockedComponent() {
    values = useStyles();
    return null;
  }
  render(<MockedComponent />);
  return values;
}

describe("<InfoItem/>", () => {
  it("renders the <InfoItem/> with populated data", () => {
    const { container, getByText } = render(
      <InfoItem title="ongoing" total={100} />
    );

    expect(getByText("ongoing")).toBeTruthy();
    expect(getByText("100")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("validate the return values of useStyles hook", () => {
    const validateStlyes = checkStyles();

    expect(validateStlyes.card).toBeTruthy();
  });
});

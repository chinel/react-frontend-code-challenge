import React from "react";
import { render } from "@testing-library/react";
import { useRowStyles } from "../../components/TableSummary/TableSummaryStyles";
import Row from "../../components/TableSummary/Row";

function checkStyles() {
  let values;

  function MockedComponent() {
    values = useRowStyles();
    return null;
  }
  render(<MockedComponent />);
  return values;
}

describe("<Row/>", () => {
  it("validate the return values of useStyles hook", () => {
    const validateStlyes = checkStyles();

    expect(validateStlyes.tableWrapper).toBeTruthy();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import RiskIcon from "../../components/TableSummary/RiskIcon";

describe("<BreadCrumb/>", () => {
  it("renders the <RiskIcon/> with Mid Risk", () => {
    const { getByTestId } = render(<RiskIcon risk="Mid Risk" />);

    expect(getByTestId("mid-risk")).toBeTruthy();
  });

  it("renders the <RiskIcon/> with High Risk", () => {
    const { getByTestId } = render(<RiskIcon risk="High Risk" />);

    expect(getByTestId("high-risk")).toBeTruthy();
  });

  it("renders the <RiskIcon/> with Low Risk", () => {
    const { getByTestId } = render(<RiskIcon risk="Low Risk" />);

    expect(getByTestId("low-risk")).toBeTruthy();
  });
});

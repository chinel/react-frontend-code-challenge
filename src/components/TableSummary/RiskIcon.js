import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
function RiskIcon({ risk }) {
  if (risk === "Mid Risk") {
    return <ArrowForwardIcon className="midRisk" data-testid="mid-risk" />;
  }

  if (risk === "High Risk") {
    return <ArrowUpwardIcon className="highRisk" data-testid="high-risk" />;
  }

  if (risk === "Low Risk") {
    return (
      <ArrowForwardIcon
        data-testid="low-risk"
        className="lowRisk"
        style={{ transform: "rotateZ(45deg)" }}
      />
    );
  }
}

export default RiskIcon;

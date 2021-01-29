import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
function RiskIcon({ risk }) {
  if (risk === "Mid Risk") {
    return <ArrowForwardIcon className="midRisk" />;
  }

  if (risk === "High Risk") {
    return <ArrowUpwardIcon className="highRisk" />;
  }

  if (risk === "Low Risk") {
    return (
      <ArrowForwardIcon
        className="lowRisk"
        style={{ transform: "rotateZ(45deg)" }}
      />
    );
  }
}

export default RiskIcon;

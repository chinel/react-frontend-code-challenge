import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Hidden,
} from "@material-ui/core";

import { StyledTableCell, useRowStyles } from "./TableSummaryStyles";
import Row from "./Row";

function createData(name, location, status, entries, risk) {
  return {
    name,
    location,
    status,
    entries,
    risk,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

const rows = [
  createData(
    "Courtney Henry",
    { state: "Lagos State", address: "8080 Railway stree" },
    2,
    { entries: 10, type: "homogenous" },
    "Low Risk"
  ),
  createData(
    "Courtney Henry",
    { state: "Lagos State", address: "8080 Railway stree" },
    2,
    { entries: 10, type: "homogenous" },
    "Low Risk"
  ),
  createData(
    "Courtney Henry",
    { state: "Lagos State", address: "8080 Railway stree" },
    0,
    { entries: 10, type: "homogenous" },
    "Mid Risk"
  ),
  createData(
    "Courtney Henry",
    { state: "Lagos State", address: "8080 Railway stree" },
    0,
    { entries: 10, type: "homogenous" },
    "Low Risk"
  ),
  createData(
    "Courtney Henry",
    { state: "Lagos State", address: "8080 Railway stree" },
    2,
    { entries: 10, type: "homogenous" },
    "High Risk"
  ),
  createData(
    "Courtney Henry",
    { state: "Lagos State", address: "8080 Railway stree" },
    2,
    { entries: 10, type: "homogenous" },
    "Low Risk"
  ),
  createData(
    "Courtney Henry",
    { state: "Lagos State", address: "8080 Railway stree" },
    2,
    { entries: 10, type: "homogenous" },
    "Low Risk"
  ),
  createData(
    "Courtney Henry",
    { state: "Lagos State", address: "8080 Railway stree" },
    2,
    { entries: 10, type: "homogenous" },
    "Low Risk"
  ),
];

function TableSummary() {
  const classes = useRowStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <TableContainer component={Paper} className={classes.tableWrapper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Checkbox
                className={classes.checkBox}
                checked={checked}
                onChange={handleChange}
              />
            </StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <Hidden smDown>
              <StyledTableCell>Location</StyledTableCell>

              <StyledTableCell>Status</StyledTableCell>
            </Hidden>
            <Hidden smDown>
              <StyledTableCell>Entries</StyledTableCell>
            </Hidden>

            <StyledTableCell>Risk Profile</StyledTableCell>
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} checked={checked} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableSummary;

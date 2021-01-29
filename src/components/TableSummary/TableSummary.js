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
import { useQuery } from "@apollo/client";
import { GET_REPORTS } from "../../graphql-endpoint/queries";
import { LoadingProgress } from "..";

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

function TableSummary() {
  const classes = useRowStyles();
  const [checked, setChecked] = React.useState(false);
  const { data, loading, error } = useQuery(GET_REPORTS);

  if (loading) {
    return <LoadingProgress />;
  }

  if (error) return <div>Error fetching Report details</div>;

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    data.report && (
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
            {data.report.map((row) => (
              <Row key={row.is} row={row} checked={checked} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}

export default TableSummary;

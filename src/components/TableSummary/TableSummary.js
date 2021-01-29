import React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  makeStyles,
  withStyles,
  Checkbox,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Grow,
  Popper,
  Hidden,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#F3F6F9",
    color: "#899198",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    padding: "0 10px",
  },
  body: {
    fontSize: 14,
    padding: "7px 10px",
  },
}))(TableCell);

const StyledInnerTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#F3F6F9",
    color: "#899198",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    padding: "10px",
  },
  body: {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#25213B",
    padding: "12px 10px",
  },
}))(TableCell);

const useRowStyles = makeStyles({
  tableWrapper: {
    boxShadow: "0px 4px 30px rgba(192, 192, 192, 0.25)",
    borderBottomRightRadius: "6px",
    borderBottomLeftRadius: "6px",
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "0px",
  },

  arrowButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  dropDownButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  dropDownMenu: {
    zIndex: "999",

    "& div li": {
      fontSize: "14px",
      color: "#778699",
    },

    "& li:hover": {
      backgroundColor: "#DEEFFF",
      color: "#006FD6",
    },
  },

  checkBox: {
    color: "#9F9F9F",

    "&:hover": {
      backgroundColor: "transparent!important",
    },
    "& span": {
      "&:hover": {
        backgroundColor: "transparent!important",
      },
    },
    // eslint-disable-next-line no-useless-computed-key
    ["@media screen and (max-width:600px)"]: {
      padding: "5px",
    },
  },
  arrowIcon: {
    color: "#0052CC",
    borderRadius: "50%",
    border: "1px solid #0052CC",
    fontSize: "15px",
  },
  paper: {
    marginRight: "10px",
  },
  name: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#25213B",
    fontWeight: "600",
  },
  locationstate: {
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#25213B",
    marginBottom: "3px",
  },
  street: {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#878592",
    margin: "0px",
  },
  status: {
    background: "#F6F3FF",
    borderRadius: "11px",
    padding: "2px 12px",
    display: "inline-block",
    textAlign: "center",
    fontFamily: "Product Sans Bold",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#8C70FF",
  },
  noStatus: {
    background: "#FFF6DE",
    borderRadius: "11px",
    padding: "2px 12px",
    display: "inline-block",
    textAlign: "center",
    fontFamily: "Product Sans Bold",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#F4B400",
  },
  entryBullet: {
    display: "inline-block",
    marginRight: "3px",
    fontSize: "30px",
    position: "relative",
    top: "-1px",
  },
  entries: {
    fontFamily: "Product Sans Bold",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#25213B",
    marginBottom: "3px",
  },
  entryType: {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#878592",
    margin: "0px",
  },
  risk: {
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
  },
  riskValue: {
    display: "inline-block",
    marginLeft: "10px",
  },
  lowRisk: {
    color: "#3AB65C",
  },
  midRisk: {
    color: "#3C3AB6",
  },
  highRisk: {
    color: "#B63A3A",
  },
  innerTable: {
    marginBottom: "30px",
    marginTop: "20px",
    "& tr": {
      borderBottom: "2px solid #ffffff",
    },
  },
});

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

function Row(props) {
  const { row, checked } = props;
  const [checkedBox, setCheckedBox] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const classes = useRowStyles();
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  function handleCheckBox() {
    setCheckedBox((prevState) => !prevState);
  }

  React.useEffect(() => {
    setCheckedBox(checked);
  }, [checked]);

  function riskType(riskType) {
    let selectedType;
    switch (riskType) {
      case "Low Risk":
        selectedType = classes.lowRisk;
        break;
      case "Mid Risk":
        selectedType = classes.midRisk;
        break;
      case "High Risk":
        selectedType = classes.highRisk;
        break;
      default:
        break;
    }

    return selectedType;
  }

  return (
    <React.Fragment>
      <TableRow className={classes.tableContent}>
        <StyledTableCell>
          <Checkbox
            className={classes.checkBox}
            checked={checkedBox}
            onChange={handleCheckBox}
          />
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            disableFocusRipple
            disableRipple
            className={classes.arrowButton}
          >
            {open ? (
              <KeyboardArrowUpIcon className={classes.arrowIcon} />
            ) : (
              <KeyboardArrowDownIcon className={classes.arrowIcon} />
            )}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          <p className={classes.name}>{row.name}</p>
        </StyledTableCell>
        <Hidden smDown>
          <StyledTableCell>
            <div>
              <p className={classes.locationstate}>{row.location.state}</p>
              <p className={classes.street}>{row.location.address}</p>
            </div>
          </StyledTableCell>

          <StyledTableCell>
            {row.status > 0 ? (
              <span className={classes.status}>{row.status} Issues found</span>
            ) : (
              <span className={classes.noStatus}>No Issues</span>
            )}
          </StyledTableCell>
        </Hidden>

        <Hidden smDown>
          <StyledTableCell>
            <div>
              <p className={classes.entries}>
                <span className={classes.entryBullet}>.</span>
                {row.entries.entries} Unique Entries
              </p>
              <p className={classes.entryType}>{row.entries.type}</p>
            </div>
          </StyledTableCell>
        </Hidden>
        <StyledTableCell>
          <p className={`${classes.risk} ${riskType(row.risk)} `}>
            <RiskIcon risk={row.risk} />{" "}
            <span className={classes.riskValue}>{row.risk}</span>
          </p>
        </StyledTableCell>
        <StyledTableCell>
          <div>
            <IconButton
              ref={anchorRef}
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleToggle}
              disableFocusRipple
              disableRipple
              className={classes.dropDownButton}
            >
              <MoreVertIcon />
            </IconButton>
            <Popper
              open={openMenu}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              className={classes.dropDownMenu}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={openMenu}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </StyledTableCell>
      </TableRow>
      {open && (
        <TableRow>
          <StyledTableCell
            style={{ paddingBottom: 0, paddingTop: 0 }}
            colSpan={7}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  style={{ marginTop: "20px" }}
                >
                  Report Breakdown
                </Typography>
                <Table
                  size="small"
                  aria-label="purchases"
                  className={classes.innerTable}
                >
                  <TableHead>
                    <TableRow>
                      <StyledInnerTableCell>Date</StyledInnerTableCell>
                      <StyledInnerTableCell>Name</StyledInnerTableCell>
                      <StyledInnerTableCell align="right">
                        Location
                      </StyledInnerTableCell>
                      <Hidden smDown>
                        <StyledInnerTableCell align="right">
                          Street
                        </StyledInnerTableCell>
                      </Hidden>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <StyledInnerTableCell component="th" scope="row">
                          {historyRow.date}
                        </StyledInnerTableCell>
                        <StyledInnerTableCell>
                          {historyRow.customerId}
                        </StyledInnerTableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <Hidden smDown>
                          <StyledInnerTableCell align="right">
                            {Math.round(historyRow.amount * row.price * 100) /
                              100}
                          </StyledInnerTableCell>
                        </Hidden>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </StyledTableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
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

import React from "react";
import {
  Box,
  Checkbox,
  ClickAwayListener,
  Collapse,
  Grow,
  Hidden,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import {
  StyledInnerTableCell,
  StyledTableCell,
  useRowStyles,
} from "./TableSummaryStyles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import RiskIcon from "./RiskIcon";

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
                        className={classes.dropDownActionMenu}
                      >
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon className={classes.menuListIcon}>
                            <EditIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="Edit" />
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                          <ListItemIcon className={classes.menuListIcon}>
                            <DeleteForeverIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="Delete" />
                        </MenuItem>
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

export default Row;

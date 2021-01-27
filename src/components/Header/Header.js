import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  InputBase,
  fade,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "../../assets/images/noti-Shape.svg";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
const useStyles = makeStyles((theme) => ({
  menuBar: {
    boxShadow: "none",
    height: "52px",
    borderBottom: "1px solid #ccc",
  },
  toolBar: {
    minHeight: "52px",
    display: "flex",
    justifyContent: "space-between",
  },
  leftMenu: {
    display: "flex",
    alignItems: "center",
  },
  rightMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Product Sans Bold",
    fontSize: "14px",
    color: "#000000",
    lineHeight: "22px",
  },
  menuNav: {
    display: "flex",
    justifyContent: "space-between",
  },
  navMenuWrapper: {
    marginLeft: "40px",
  },
  navMenu: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navMenuItem: {
    display: "inline-block",
  },
  navMenuAnchor: {
    textDecoration: "none",
    padding: "20px 18px 13px 18px",
    color: "#778699",
    fontSize: "14px",
    outline: "none",
  },
  activeLink: {
    backgroundColor: "#DEEFFF",
    color: "#006FD6",
    borderBottom: "4px solid #006FD6",
  },
  svgIcon: {
    marginRight: "10px",
  },
  lastIcon: {
    position: "relative",
    top: "2px",
  },
  activeSvg: {
    fill: "#006FD6",
  },

  search: {
    position: "relative",
    borderRadius: "4px",
    border: "1px solid #DCE1E7",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  notificationBadge: {
    fontSize: "0.65rem",
    padding: "0 4px",
    top: "-3px",
  },
  notificationButton: {
    padding: "12px 5px 5px",
    marginLeft: "15px",
  },
  userIcon: {
    backgroundColor: "#D8D8D8",
    padding: "4px",
    marginLeft: "20px",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
  },
  dropDown2: {
    ".MuiMenu-paper": {
      top: "50px",
    },
  },
  buttonNav: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
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

  function activeLink(link) {
    return link === "Division";
  }
  return (
    <>
      <AppBar color="primary" position="fixed" className={classes.menuBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.leftMenu}>
            <img alt="logo" src="/images/logo.png" />
            <Typography className={classes.title}>
              FE Engineer Test 1
            </Typography>

            <div className={classes.navMenuWrapper}>
              <ul className={classes.navMenu}>
                <li className={classes.navMenuItem}>
                  <a href="/home" className={classes.navMenuAnchor}>
                    <svg
                      className={classes.svgIcon}
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.02708 0.152083C6.12674 0.0546 6.2606 9.08441e-06 6.4 0C6.53415 0.000418845 6.66321 0.0513739 6.76146 0.142708L10.1333 2.90104V2.13333C10.1333 1.83893 10.3723 1.6 10.6667 1.6H11.2C11.4944 1.6 11.7333 1.83893 11.7333 2.13333V4.20937L12.5854 4.90625C12.598 4.91577 12.6102 4.92585 12.6219 4.93646L12.6302 4.94271C12.7386 5.04369 12.8001 5.18519 12.8 5.33333C12.8 5.62789 12.5612 5.86667 12.2667 5.86667H11.7333V11.7333C11.7333 12.3227 11.256 12.8 10.6667 12.8H2.13333C1.544 12.8 1.06667 12.3227 1.06667 11.7333V5.86667H0.533333C0.238781 5.86667 0 5.62789 0 5.33333C0.000180116 5.18556 0.0616657 5.04448 0.169792 4.94375V4.94271L0.189583 4.92604C0.196057 4.92068 0.202656 4.91547 0.209375 4.91042L6.02708 0.152083ZM10.1333 6.93333H8V11.2H10.1333V6.93333Z"
                        fill="#72809D"
                      />
                    </svg>
                    Home
                  </a>
                </li>
                <li className={classes.navMenuItem}>
                  <a href="/entries" className={classes.navMenuAnchor}>
                    <svg
                      className={classes.svgIcon}
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.06667 0C0.477333 0 0 0.477333 0 1.06667V2.13333H12.8V1.06667C12.8 0.477333 12.3227 0 11.7333 0H1.06667ZM0.533333 3.2V10.6667C0.533333 11.256 1.01067 11.7333 1.6 11.7333H11.2C11.7893 11.7333 12.2667 11.256 12.2667 10.6667V3.2H0.533333ZM8 4.8H4.8C4.5056 4.8 4.26667 5.03893 4.26667 5.33333C4.26667 5.62773 4.5056 5.86667 4.8 5.86667H8C8.2944 5.86667 8.53333 5.62773 8.53333 5.33333C8.53333 5.03893 8.2944 4.8 8 4.8Z"
                        fill="#72809D"
                      />
                    </svg>
                    Entries
                  </a>
                </li>
                <li className={classes.navMenuItem}>
                  <a
                    href="/divisions"
                    className={`${classes.navMenuAnchor} ${() =>
                      activeLink("division")} && ${classes.activeLink} `}
                  >
                    <svg
                      className={`${classes.lastIcon} ${classes.svgIcon}`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={classes.activeSvg}
                        d="M6.26662 2C5.67728 2 5.19995 2.47733 5.19995 3.06667V12.6667C5.19995 13.256 5.67728 13.7333 6.26662 13.7333H10.5333C11.1226 13.7333 11.6 13.256 11.6 12.6667V3.06667C11.6 2.47733 11.1226 2 10.5333 2H6.26662Z"
                        fill="#72809D"
                      />
                      <path
                        className={classes.activeSvg}
                        d="M3.06667 3.06668C2.47733 3.06668 2 3.54401 2 4.13335V11.6C2 12.1893 2.47733 12.6667 3.06667 12.6667H4.13333V3.06668H3.06667Z"
                        fill="#72809D"
                      />
                      <path
                        className={classes.activeSvg}
                        d="M12.6667 3.06668V12.6667H13.7334C14.3227 12.6667 14.8001 12.1893 14.8001 11.6V4.13335C14.8001 3.54401 14.3227 3.06668 13.7334 3.06668H12.6667Z"
                        fill="#72809D"
                      />
                    </svg>
                    Divisions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={classes.rightMenu}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: "#979797" }} />
              </div>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            <IconButton
              aria-label="notifications"
              color="inherit"
              className={classes.notificationButton}
            >
              <Badge
                badgeContent={2}
                className={classes.notificationBadge}
                color="secondary"
              >
                <img src={NotificationsIcon} alt="notifications" />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="user"
              color="inherit"
              className={classes.buttonNav}
              disableFocusRipple
              disableRipple
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <PersonRoundedIcon
                style={{ color: "#72809D" }}
                className={classes.userIcon}
              />
              <ExpandMoreRoundedIcon style={{ color: "#72809D" }} />
            </IconButton>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
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
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;

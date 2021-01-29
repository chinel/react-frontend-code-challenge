import { makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuBar: {
    boxShadow: "inset 0px -1px 0px rgba(220, 225, 231, 0.572143);",
    height: "52px",

    zIndex: "9999",
  },
  toolBar: {
    minHeight: "52px",
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {},
  leftMenu: {
    display: "flex",
    alignItems: "center",
    "& a": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      outline: "none",
      "&:hover": {
        textDecoration: "none",
      },
    },
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
    padding: "6px 18px 20px 18px",
    color: "#778699",
    fontSize: "14px",
    outline: "none",
    fontFamily: "Product Sans Medium Regular",
    fontWeight: "400",

    "&:hover": {
      backgroundColor: "#DEEFFF",
      color: "#006FD6",
      borderBottom: "4px solid #006FD6",
      paddingBottom: "12px",
      paddingTop: "20px",
      "& svg path": {
        fill: "#006FD6",
      },
    },
  },
  activeLink: {
    backgroundColor: "#DEEFFF",
    color: "#006FD6",
    borderBottom: "4px solid #006FD6",
    paddingBottom: "13px",
    paddingTop: "20px",
  },
  svgIcon: {
    marginRight: "10px",
  },
  lastIcon: {
    position: "relative",
    top: "0px",
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
  menuListIcon: {
    minWidth: "35px!important",
  },
  menuListText: {
    marginRight: "20px",
  },
  dropDownAccMenu: {
    color: "#778699",
    "& li div>span": {
      fontSize: "14px",
      fontFamily: "Product Sans Medium Regular",
      fontWeight: "400",
    },
    "& li div>svg path": {
      fill: "#72809D",
    },
    "& li:hover": {
      backgroundColor: "#DEEFFF",
      color: "#006FD6",

      "& div>svg path": {
        fill: "#006FD6",
      },
    },
  },
}));

export default useStyles;

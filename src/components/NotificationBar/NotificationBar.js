import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WarningIcon from "@material-ui/icons/Warning";

const useStyles = makeStyles({
  list: {
    width: 320,
    marginTop: "52px",
  },
  fullList: {
    width: "auto",
  },
  mobileDropdownMenu: {
    color: "#778699",
    "&>div": {
      paddingLeft: "29px",
      paddingBottom: "12px",
      paddingTop: "12px",
    },
    "& div>span": {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "16px",
      color: "#25213B",
    },
    "& div>svg path": {
      fill: "#72809D",
    },
    "&>div:hover": {
      backgroundColor: "#DEEFFF",
      color: "#006FD6",

      "& div>svg path": {
        fill: "#006FD6",
      },
    },
  },
  activeMenu: {
    backgroundColor: "#DEEFFF",
    color: "#006FD6",
    paddingBottom: "13px",
    paddingTop: "20px",
    "& div>svg path": {
      fill: "#006FD6",
    },
  },
  notificationHeader: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "15px",
    fontFamily: "Product Sans Bold",
    color: "#000000",
    paddingBottom: "20px",
    borderBottom: "4px solid #006FD6",
  },
});

export default function NotificationBar(props) {
  const { toggleDrawerHandler, status } = props;
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={status.right}
          onClose={() => toggleDrawerHandler("right")}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={() => toggleDrawerHandler("right")}
            onKeyDown={() => toggleDrawerHandler("right")}
          >
            <p className={classes.notificationHeader}>Notifications</p>
            <List className={classes.mobileDropdownMenu}>
              <ListItem button>
                <ListItemIcon>
                  <WarningIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Updates"
                  secondary="Your account will expire on the 22nd"
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <WarningIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Updates"
                  secondary="Your account will expire on the 22nd"
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <WarningIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Updates"
                  secondary="Your account will expire on the 22nd"
                />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

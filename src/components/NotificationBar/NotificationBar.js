import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WarningIcon from "@material-ui/icons/Warning";
import useStyles from "./NotificationBarStyles";

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

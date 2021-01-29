import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const useStyles = makeStyles({
  list: {
    width: 250,
    marginTop: "52px",
  },
  fullList: {
    width: "auto",
  },
});

export default function MobileNav(props) {
  const { toggleDrawerHandler, status } = props;
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <Drawer anchor="left" open={status.left} onClose={toggleDrawerHandler}>
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawerHandler}
            onKeyDown={toggleDrawerHandler}
          >
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

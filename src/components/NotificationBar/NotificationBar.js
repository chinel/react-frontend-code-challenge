import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WarningIcon from "@material-ui/icons/Warning";
import useStyles from "./NotificationBarStyles";
import { useQuery } from "@apollo/client";
import { GET_NOTIFICATIONS } from "../../graphql-endpoint/queries";
import LoadingProgress from "../LoadingProgress/LoadingProgress";

export default function NotificationBar(props) {
  const { toggleDrawerHandler, status } = props;
  const classes = useStyles();

  const { data, loading, error } = useQuery(GET_NOTIFICATIONS);

  if (loading) {
    return <LoadingProgress />;
  }

  if (error) return <div>Error fetching Notifications</div>;

  return (
    data.notifications && (
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
                {data.notifications.map((notification) => (
                  <ListItem button key={notification.id}>
                    <ListItemIcon>
                      <WarningIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={notification.title}
                      secondary={notification.description}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    )
  );
}

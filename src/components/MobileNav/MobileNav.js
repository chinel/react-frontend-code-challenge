import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useStyles from "./MobileNavStyles";

export default function MobileNav(props) {
  const { toggleDrawerHandler, status } = props;
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="left"
          open={status.left}
          onClose={() => toggleDrawerHandler("left")}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={() => toggleDrawerHandler("left")}
            onKeyDown={() => toggleDrawerHandler("left")}
          >
            <List className={classes.mobileDropdownMenu}>
              <ListItem button>
                <ListItemIcon>
                  <svg
                    className={classes.svgIcon}
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.02708 0.152083C6.12674 0.0546 6.2606 9.08441e-06 6.4 0C6.53415 0.000418845 6.66321 0.0513739 6.76146 0.142708L10.1333 2.90104V2.13333C10.1333 1.83893 10.3723 1.6 10.6667 1.6H11.2C11.4944 1.6 11.7333 1.83893 11.7333 2.13333V4.20937L12.5854 4.90625C12.598 4.91577 12.6102 4.92585 12.6219 4.93646L12.6302 4.94271C12.7386 5.04369 12.8001 5.18519 12.8 5.33333C12.8 5.62789 12.5612 5.86667 12.2667 5.86667H11.7333V11.7333C11.7333 12.3227 11.256 12.8 10.6667 12.8H2.13333C1.544 12.8 1.06667 12.3227 1.06667 11.7333V5.86667H0.533333C0.238781 5.86667 0 5.62789 0 5.33333C0.000180116 5.18556 0.0616657 5.04448 0.169792 4.94375V4.94271L0.189583 4.92604C0.196057 4.92068 0.202656 4.91547 0.209375 4.91042L6.02708 0.152083ZM10.1333 6.93333H8V11.2H10.1333V6.93333Z"
                      fill="#72809D"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <svg
                    className={classes.svgIcon}
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.06667 0C0.477333 0 0 0.477333 0 1.06667V2.13333H12.8V1.06667C12.8 0.477333 12.3227 0 11.7333 0H1.06667ZM0.533333 3.2V10.6667C0.533333 11.256 1.01067 11.7333 1.6 11.7333H11.2C11.7893 11.7333 12.2667 11.256 12.2667 10.6667V3.2H0.533333ZM8 4.8H4.8C4.5056 4.8 4.26667 5.03893 4.26667 5.33333C4.26667 5.62773 4.5056 5.86667 4.8 5.86667H8C8.2944 5.86667 8.53333 5.62773 8.53333 5.33333C8.53333 5.03893 8.2944 4.8 8 4.8Z"
                      fill="#72809D"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Entries" />
              </ListItem>
              <ListItem button className={classes.activeMenu}>
                <ListItemIcon>
                  <svg
                    className={`${classes.lastIcon} ${classes.svgIcon}`}
                    width="16"
                    height="15"
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
                </ListItemIcon>
                <ListItemText primary="Divisions" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

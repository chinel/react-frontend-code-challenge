import { makeStyles, TableCell, withStyles } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
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

export const StyledInnerTableCell = withStyles((theme) => ({
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
    fontFamily: "Product Sans Medium Regular",
    FontWeight: "500",
  },
}))(TableCell);

export const useRowStyles = makeStyles({
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
    fontSize: "12px",
    lineHeight: "15px",
    color: "#25213B",
    marginBottom: "3px",
    fontFamily: "Product Sans Medium Regular",
    fontWeight: "600",
  },
  street: {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#878592",
    margin: "0px",
    fontFamily: "Product Sans Medium Regular",
    FontWeight: "500",
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
    fontSize: "12px",
    lineHeight: "15px",
    color: "#25213B",
    marginBottom: "3px",
    fontFamily: "Product Sans Medium Regular",
    fontWeight: "600",
  },
  entryType: {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#878592",
    margin: "0px",
    fontFamily: "Product Sans Medium Regular",
    FontWeight: "500",
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
  dropDownActionMenu: {
    color: "#778699",
    "& li>div": {
      minWidth: "35px",
    },
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
});

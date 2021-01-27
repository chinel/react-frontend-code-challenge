import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Product Sans Regular", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

export default theme;

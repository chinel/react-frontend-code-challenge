import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MuiThemeProvider>,

  document.getElementById("root")
);

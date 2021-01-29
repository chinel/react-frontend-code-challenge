import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "./custom-styles";
import App from "./App";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql-endpoint/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

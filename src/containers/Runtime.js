import React from "react";
import { OvermindProvider } from "hooks";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

export default props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <OvermindProvider>
        <Router>{props.children}</Router>
      </OvermindProvider>
    </React.Fragment>
  );
};

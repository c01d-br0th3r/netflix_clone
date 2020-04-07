import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routers/Home";

export default () => (
  <>
    <Router>
      <Route exact path="/home" component={Home} />
    </Router>
  </>
);

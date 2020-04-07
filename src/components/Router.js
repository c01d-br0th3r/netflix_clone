import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routers/Home";
import Header from "./Header";
import Search from "../routers/Search";

export default () => (
  <>
    <Router>
      <Header />
      <Route exact path="/home" component={Home} />
      <Route exact path="/search" component={Search} />
    </Router>
  </>
);

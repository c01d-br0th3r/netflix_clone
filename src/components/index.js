import React from "react";
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";
import Home from "../routers/Home";
import Router from "./Router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;

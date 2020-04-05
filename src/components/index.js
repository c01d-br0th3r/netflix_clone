import React from "react";
import PopularMovies from "./popularMovies";
import MainPoster from "./MainPoster";
import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <MainPoster />
      <PopularMovies />
    </div>
  );
};

export default App;

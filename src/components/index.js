import React from "react";
import PopularMovies from "./popularMovies";
import MainPoster from "./MainPoster";
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MainPoster />
      <PopularMovies />
    </div>
  );
};

export default App;

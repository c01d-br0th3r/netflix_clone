import React from "react";
import PopularMovies from "./popularMovies";
import MainPoster from "./MainPoster";
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";
import NowPlayingMovies from "./nowPlayingMovies";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MainPoster />
      <PopularMovies />
      <NowPlayingMovies />
    </div>
  );
};

export default App;

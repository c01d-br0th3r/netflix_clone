import React from "react";
import NowPlayingMovies from "./nowPlayingMovies";
import PopularMoviesContainer from "./popularMovies";
import MainPoster from "./MainPoster";

const Home = () => {
  return (
    <>
      <MainPoster />
      <NowPlayingMovies />
      <PopularMoviesContainer />
    </>
  );
};

export default Home;

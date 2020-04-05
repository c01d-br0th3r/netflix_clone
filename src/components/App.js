import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";
import popularMoviesActions from "../actions/popularMoviesActions";

const App = () => {
  const popularMovies = useSelector((state) => state.popularMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.popularMoviesActions.fetchPopularMovies());
  }, []);

  console.log(popularMovies.loading, popularMovies.movies);
  return <div></div>;
};

export default App;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";
import Presenter from "../Presenter";

const PopularMoviesContainer = () => {
  const popularMovies = useSelector((state) => state.popularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.popularMoviesActions.fetchPopularMovies());
  }, []);

  console.log(popularMovies);
  const { movies, loading } = popularMovies;

  return (
    <Presenter loading={loading} movies={movies} title="지금 인기있는 영화" />
  );
};

export default PopularMoviesContainer;

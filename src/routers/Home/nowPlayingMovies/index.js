import React, { useEffect } from "react";
import allActions from "../../../actions";
import { useSelector, useDispatch } from "react-redux";
import Presenter from "../../../components/Presenter";

const NowPlayingMovies = () => {
  const nowPlayingMovies = useSelector((state) => state.nowPlayingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.nowPlayingMoviesActions.fetchNowPlayingMovies());
  }, []);

  console.log(nowPlayingMovies);
  const { movies, loading } = nowPlayingMovies;

  return <Presenter loading={loading} movies={movies} title="상영중인 영화" />;
};

export default NowPlayingMovies;

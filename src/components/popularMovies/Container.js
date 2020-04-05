import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";

const PopularMoviesContainer = () => {
  const popularMovies = useSelector((state) => state.popularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.popularMoviesActions.fetchPopularMovies());
  }, []);

  console.log(popularMovies);
  const { loading, movies } = popularMovies;
  return (
    <div>
      Popular Container
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {movies.map((m) => (
            <div key={m.id}>{m.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularMoviesContainer;

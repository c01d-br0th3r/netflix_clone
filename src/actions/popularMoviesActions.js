const fetchPopularMovies = () => {
  return {
    type: "FETCH_POPULAR_MOVIES",
  };
};

const successFetchPopularMovies = (movies) => {
  return {
    type: "SUCCESS_FETCH_POPULAR_MOVIES",
    movies,
  };
};

const failFetchPopularMovies = (error) => {
  return {
    type: "FAIL_FETCH_POPULAR_MOVIES",
    error,
  };
};

export default {
  fetchPopularMovies,
  successFetchPopularMovies,
  failFetchPopularMovies,
};

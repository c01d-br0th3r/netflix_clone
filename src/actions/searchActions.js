const searchMovies = (term) => {
  return {
    type: "SEARCH_MOVIES",
    term,
  };
};

const successSearchMovies = (movies) => {
  return {
    type: "SUCCESS_SEARCH_MOVIES",
    movies,
  };
};

const failSearchMovies = (error) => {
  return {
    type: "FAIL_SEARCH_MOVIES",
    error,
  };
};

export default {
  searchMovies,
  successSearchMovies,
  failSearchMovies,
};

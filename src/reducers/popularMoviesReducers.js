const popularMovies = (state = { loading: true }, action) => {
  switch (action.type) {
    case "SUCCESS_FETCH_POPULAR_MOVIES":
      return { ...state, movies: action.movies, loading: false };
    case "FAIL_FETCH_POPULAR_MOVIES":
      return [...state, action.error];
    default:
      return state;
  }
};

export default popularMovies;

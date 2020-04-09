const search = (state = { loading: true }, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return { ...state, term: action.term };
    case "SUCCESS_SEARCH_MOVIES":
      return { ...state, movies: action.movies, loading: false };
    case "FAIL_SEARCH_MOVIES":
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default search;

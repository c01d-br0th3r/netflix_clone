const searchTV = (state = { loading: true }, action) => {
  switch (action.type) {
    case "SEARCH_TV":
      return { ...state, term: action.term };
    case "SUCCESS_SEARCH_TV":
      return { ...state, tvs: action.tvs, loading: false };
    case "FAIL_SEARCH_TV":
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default searchTV;

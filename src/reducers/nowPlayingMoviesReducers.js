const nowPlayingMovies = (state = { loading: true }, action) => {
  switch (action.type) {
    case "SUCCESS_FETCH_NOW_PLAYING_MOVIES":
      return { ...state, movies: action.movies, loading: false };
    case "FAIL_FETCH_NOW_PLAYING_MOVIES":
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default nowPlayingMovies;

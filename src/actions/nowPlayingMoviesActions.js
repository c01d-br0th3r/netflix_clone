const fetchNowPlayingMovies = () => {
  return {
    type: "FETCH_NOW_PLAYING_MOVIES",
  };
};

const successNowPlayingMovies = (movies) => {
  return {
    type: "SUCCESS_FETCH_NOW_PLAYING_MOVIES",
    movies,
  };
};

const failNowPlayingMovies = (error) => {
  return {
    type: "FAIL_FETCH_NOW_PLAYING_MOVIES",
    error,
  };
};

export default {
  fetchNowPlayingMovies,
  successNowPlayingMovies,
  failNowPlayingMovies,
};

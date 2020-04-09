import { combineReducers } from "redux";
import popularMovies from "./popularMoviesReducers";
import nowPlayingMovies from "./nowPlayingMoviesReducers";
import search from "./searchReducers";
import searchTV from "./searchTVReducers";

const rootReducer = combineReducers({
  popularMovies,
  nowPlayingMovies,
  search,
  searchTV,
});

export default rootReducer;

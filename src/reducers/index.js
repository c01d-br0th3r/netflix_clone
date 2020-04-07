import { combineReducers } from "redux";
import popularMovies from "./popularMoviesReducers";
import nowPlayingMovies from "./nowPlayingMoviesReducers";

const rootReducer = combineReducers({ popularMovies, nowPlayingMovies });

export default rootReducer;

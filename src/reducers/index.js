import { combineReducers } from "redux";
import popularMovies from "./popularMoviesReducers";

const rootReducer = combineReducers({ popularMovies });

export default rootReducer;

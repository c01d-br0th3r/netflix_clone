import { takeEvery, call, put } from "redux-saga/effects";
import allActions from "../actions";
import api from "../api";

function* workerPopularMoviesSaga() {
  console.log("FETCH POPULAR MOVIES");
  try {
    const {
      data: { results },
    } = yield call(api.popularMoviesApi);
    yield put(
      allActions.popularMoviesActions.successFetchPopularMovies(results)
    );
  } catch (error) {
    console.log(error);
    yield put(allActions.popularMoviesActions.failFetchPopularMovies(error));
  }
}

function* workerNowPlayingMoviesSaga() {
  try {
    console.log("FETCH_NOW_PLAYING_MOVIES");
    const {
      data: { results },
    } = yield call(api.nowPlayingMoviesApi);
    yield put(
      allActions.nowPlayingMoviesActions.successNowPlayingMovies(results)
    );
  } catch (error) {
    console.log(error);
    yield put(allActions.nowPlayingMoviesActions.failNowPlayingMovies(error));
  }
}

function* workerSearchMoviesSaga() {
  console.log("Search!");
  try {
    const results = yield call(api.searchApi.searchMovies);
  } catch (error) {}
}

function* rootSaga() {
  yield takeEvery("FETCH_POPULAR_MOVIES", workerPopularMoviesSaga);
  yield takeEvery("FETCH_NOW_PLAYING_MOVIES", workerNowPlayingMoviesSaga);
  yield takeEvery("SEARCH_MOVIES", workerSearchMoviesSaga);
}

export default rootSaga;

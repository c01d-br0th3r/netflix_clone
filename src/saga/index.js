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
    yield put(allActions.popularMoviesActions.failFetchPopularMovies());
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_POPULAR_MOVIES", workerPopularMoviesSaga);
}

export default rootSaga;

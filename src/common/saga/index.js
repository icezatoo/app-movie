// Sagas
import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as MovieconfigAction from '../actions/movieconfig/movieconfigaction';
import * as MoviedetailAction from '../actions/moviedetails/moviedetailaction';
import CallApiMovieconfig from './movieconfigsaga';
import CallApiMoviedetail from './moviedetailsaga';

export default function* FetchMovie() {
  yield all([
    yield takeEvery(MovieconfigAction.FETCHED_CONFIG, CallApiMovieconfig),
    yield takeLatest(MoviedetailAction.FETCHED_MOVIEDETAIL, CallApiMoviedetail),
  ]);
}

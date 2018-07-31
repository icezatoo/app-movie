// Sagas
import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as MovieconfigAction from '../actions/movieconfig/movieconfigaction';
import * as MoviedetailAction from '../actions/moviedetails/moviedetailaction';
import * as MovielistAction from '../actions/movielist/movielist';
import CallApiMovieconfig from './movieconfigsaga';
import CallApiMoviedetail from './moviedetailsaga';
import CallApiListSearch from './movielistsaga';

export default function* FetchMovie() {
  yield all([
    yield takeEvery(MovieconfigAction.FETCHED_CONFIG, CallApiMovieconfig),
    yield takeLatest(MoviedetailAction.FETCHED_MOVIEDETAIL, CallApiMoviedetail),
    yield takeEvery(MovielistAction.FETCHED_MOVIELIST, CallApiListSearch),
  ]);
}

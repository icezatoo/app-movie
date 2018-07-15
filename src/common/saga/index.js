// Sagas
import { takeEvery } from 'redux-saga/effects';
import * as MovieconfigAction from '../actions/movieconfig/movieconfigaction';
import  CallApiMovieconfig from './movieconfigsaga';
export default function* FetchMovieconfig() {
  yield takeEvery(MovieconfigAction.FETCHED_CONFIG, CallApiMovieconfig);
}

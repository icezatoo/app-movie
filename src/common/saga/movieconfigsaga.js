import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { api_Key } from '../api/connect';
import * as MovieconfigAction from '../actions/movieconfig/movieconfigaction';
export default function* CallApiMovieconfig() {
  try {
    yield put(MovieconfigAction.requestMovieconfig());
    const data = yield call(() => {
      return Axios.get(`/configuration?api_key=${api_Key}`).then(
        response => response.data
      );
    });
    yield put(MovieconfigAction.requestMovieconfigSuccess(data));
  } catch (error) {
    yield put(MovieconfigAction.requestMovieconfigError(error));
  }
}

import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { api_Key } from '../api/connect';
import * as MovieListAction from '../actions/movielist/movielist';

export default function* CallApiListSearch({ payload }) {
  try {
    yield put(MovieListAction.requestMovieList());
    const datalist = yield call(() =>
      Axios.get(
        `/search/movie?api_key=${api_Key}&language=en-US&page=1&query=${payload}&include_adult=false`
      ).then(response => response.data)
    );
    yield put(MovieListAction.requestMovieListSuccess(datalist));
  } catch (error) {
    yield put(MovieListAction.requestMovieListError(error.response.data));
  }
}

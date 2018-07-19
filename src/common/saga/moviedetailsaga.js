import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { api_Key } from '../api/connect';
import * as MoviedetailAction from '../actions/moviedetails/moviedetailaction';
export default function* CallApiMoviedetail({ payload }) {
  try {
    yield put(MoviedetailAction.requestMoviedetail());
    const datadetail = yield call(() => {
      return Axios.get(
        `/movie/${payload}?api_key=${api_Key}&language=en-US`
      ).then(response => response.data);
    });
    const videos = yield call(() => {
      return Axios.get(
        `/movie/${payload}/videos?api_key=${api_Key}&language=en-US`
      ).then(response => response.data);
    });

    const credits = yield call(() => {
      return Axios.get(
        `/movie/${payload}/credits?api_key=${api_Key}&language=en-US`
      ).then(response => response.data);
    });

    const mapdata = {
      moviedetail: {
        ...datadetail,
        videoslist: [...videos.results],
        credit: [...credits.cast]
      }
    };
    yield put(MoviedetailAction.requestMoviedetailSuccess(mapdata));
  } catch (error) {
    yield put(MoviedetailAction.requestMoviedetailError(error));
  }
}

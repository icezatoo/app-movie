import Axios from 'axios';
import { api_Key } from '../../api/connect';

export const FETCH_MOVIEDETAIL_SUCCESS = 'FETCH_MOVIEDETAIL_SUCCESS';
export const FETCH_MOVIEDETAIL_ERROR = 'FETCH_MOVIEDETAIL_ERROR';
export const SET_LOADER = 'SET_LOADER';

export const fetchMovieDetailSuccess = moviedetail => {
  return {
    type: 'FETCH_MOVIEDETAIL_SUCCESS',
    moviedetail
  };
};

export const fetchMovieDetailError = error => {
  return {
    type: 'FETCH_MOVIEDETAIL_ERROR',
    error
  };
};

export const setloader = loader => {
  return {
    type: 'SET_LOADER',
    loader
  };
};

export const fetchMoviedetails = movieid => {
  return dispatch => {
    dispatch(setloader(true));
    return Axios.all([fetchMoviedetail(movieid), fetchMovieVideos(movieid)])
      .then(
        Axios.spread((detail, videos) => {
          const mapdata = {
            moviedetail: { ...detail.data },
            movievideos: { ...videos.data }
          };
          dispatch(fetchMovieDetailSuccess(mapdata));
          dispatch(setloader(false));
        })
      )
      .catch(error => {});
  };
};

const fetchMoviedetail = movieid => {
  return Axios.get(`/movie/${movieid}?api_key=${api_Key}&language=en-US`);
};

const fetchMovieVideos = movieid => {
  return Axios.get(
    `/movie/${movieid}/videos?api_key=${api_Key}&language=en-US`
  );
};

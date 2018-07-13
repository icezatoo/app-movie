import Axios from 'axios';
import { api_Key } from '../../api/connect';

export const FETCH_MOVIECONFIG_SUCCESS = 'FETCH_MOVIECONFIG_SUCCESS';
export const FETCH_MOVIECONFIG_ERROR = 'FETCH_MOVIECONFIG_ERROR';

export const fetchMovieconfigSuccess = movieconfig => {
  return {
    type: 'FETCH_MOVIECONFIG_SUCCESS',
    movieconfig
  };
};

export const fetchMovieconfigError = error => {
  return {
    type: 'FETCH_MOVIECONFIG_ERROR',
    error
  };
};

export const fetchMovieConfig = () => {
  return dispatch => {
    return Axios.get(`/configuration?api_key=${api_Key}`)
      .then(response => {
        dispatch(fetchMovieconfigSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchMovieconfigError(error));
        throw error;
      });
  };
};

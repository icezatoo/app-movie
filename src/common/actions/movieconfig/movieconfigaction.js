export const REQUESTED_MOVIECONFIG_SUCCESS = 'FETCH_MOVIECONFIG_SUCCESS';
export const REQUESTED_MOVIECONFIG_ERROR = 'FETCH_MOVIECONFIG_ERROR';
export const REQUESTED_MOVIECONFIG = 'FETCH_MOVIECONFIG';
export const FETCHED_CONFIG = 'FETCHED_CONFIG';

export const requestMovieconfig = () => ({ type: REQUESTED_MOVIECONFIG });

export const requestMovieconfigSuccess = movieconfig => ({
  type: REQUESTED_MOVIECONFIG_SUCCESS,
  movieconfig,
});

export const requestMovieconfigError = error => ({
  type: REQUESTED_MOVIECONFIG_ERROR,
  error,
});

export const fetchdataconfig = () => ({ type: FETCHED_CONFIG });

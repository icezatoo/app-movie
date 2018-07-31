export const REQUESTED_MOVIEDETAIL_SUCCESS = 'REQUESTED_MOVIEDETAIL_SUCCESS';
export const REQUESTED_MOVIEDETAIL_ERROR = 'REQUESTED_MOVIEDETAIL_ERROR';
export const REQUESTED_MOVIEDETAIL = 'REQUESTED_MOVIEDETAIL';
export const FETCHED_MOVIEDETAIL = 'FETCHED_MOVIEDETAIL';

export const requestMoviedetail = () => ({ type: REQUESTED_MOVIEDETAIL });

export const requestMoviedetailSuccess = moviedetail => ({
  type: REQUESTED_MOVIEDETAIL_SUCCESS,
  moviedetail,
});

export const requestMoviedetailError = error => ({
  type: REQUESTED_MOVIEDETAIL_ERROR,
  error,
});

export const fetchdatadetail = payload => ({ type: FETCHED_MOVIEDETAIL, payload });

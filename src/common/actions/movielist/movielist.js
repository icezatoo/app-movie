export const REQUESTED_MOVIELIST_SUCCESS = 'REQUESTED_MOVIELIST_SUCCESS';
export const REQUESTED_MOVIELIST_ERROR = 'REQUESTED_MOVIELIST_ERROR';
export const REQUESTED_MOVIELIST = 'REQUESTED_MOVIELIST';
export const FETCHED_MOVIELIST = 'FETCHED_MOVIELIST';
export const INIT_MOVIELIST = 'INIT_MOVIELIST';

export const requestMovieList = () => ({ type: REQUESTED_MOVIELIST });

export const requestMovieListSuccess = movielist => ({
  type: REQUESTED_MOVIELIST_SUCCESS,
  movielist,
});

export const requestMovieListError = error => ({
  type: REQUESTED_MOVIELIST_ERROR,
  error,
});

export const fetchdataListsearch = payload => ({ type: FETCHED_MOVIELIST, payload });

export const initMovielist = () => ({ type: INIT_MOVIELIST });

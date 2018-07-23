export const REQUESTED_MOVIEIMAGES_SUCCESS = 'REQUESTED_MOVIEIMAGES_SUCCESS';
export const REQUESTED_MOVIEIMAGES_ERROR = 'REQUESTED_MOVIEIMAGES_ERROR';
export const REQUESTED_MOVIEIMAGES = 'REQUESTED_MOVIEIMAGES';
export const FETCHED_MOVIEIMAGES = 'FETCHED_MOVIEIMAGES';

export const SET_MENU_FILTER = 'SET_MENU_FILTER';
export const SET_MOVIE_VIDEO = 'SET_MOVIE_VIDEO';

export const requestMovieimages = () => {
  return { type: REQUESTED_MOVIEIMAGES };
};

export const requestMovieimagesSuccess = moviemedia => {
  return {
    type: REQUESTED_MOVIEIMAGES_SUCCESS,
    moviemedia
  };
};

export const requestMovieimagesError = error => {
  return {
    type: REQUESTED_MOVIEIMAGES_ERROR,
    error
  };
};

export const fetchmovieimages = payload => {
  return { type: FETCHED_MOVIEIMAGES, payload };
};

export const setMenuFilter = filter => ({
  type: SET_MENU_FILTER,
  filter
});
export const setVideolist = videolist => ({
  type: SET_MOVIE_VIDEO,
  videolist
});

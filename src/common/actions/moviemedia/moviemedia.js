export const REQUESTED_MOVIEIMAGES_SUCCESS = 'REQUESTED_MOVIEIMAGES_SUCCESS';
export const REQUESTED_MOVIEIMAGES_ERROR = 'REQUESTED_MOVIEIMAGES_ERROR';
export const REQUESTED_MOVIEIMAGES = 'REQUESTED_MOVIEIMAGES';
export const FETCHED_MOVIEIMAGES = 'FETCHED_MOVIEIMAGES';

export const SET_MENU_FILTER = 'SET_MENU_FILTER';

export const SHOW_VIDEOS = 'SHOW_VIDEOS';
export const SHOW_BACKDROPS = 'SHOW_BACKDROPS';
export const SHOW_POSTERS = 'SHOW_POSTERS';

export const requestMovieimages = () => {
  return { type: REQUESTED_MOVIEIMAGES };
};

export const requestMovieimagesSuccess = moviedetail => {
  return {
    type: REQUESTED_MOVIEIMAGES_SUCCESS,
    moviedetail
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

export const MenuFilters = {
  SHOW_VIDEOS: SHOW_VIDEOS,
  SHOW_BACKDROPS: SHOW_BACKDROPS,
  SHOW_POSTERS: SHOW_POSTERS
};

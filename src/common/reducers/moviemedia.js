import * as MoviemediaActions from '../actions/moviemedia/moviemedia';
import { combineReducers } from 'redux';
const Initstate = {
  loading: false,
  error: null,
  datamedia: null
};

const InitFilterstate = {
  filterselect: 0,
  loading: false
};

export const moviemediaFetchReducer = (state = Initstate, action) => {
  switch (action.type) {
    case MoviemediaActions.REQUESTED_MOVIEIMAGES:
      return { ...state, datamedia: null, loading: false, error: null };
    case MoviemediaActions.REQUESTED_MOVIEIMAGES_SUCCESS:
      return {
        ...state,
        error: null,
        loading: true,
        datamedia: action.moviedetail
      };
    case MoviemediaActions.REQUESTED_MOVIEIMAGES_ERROR:
      return { ...state, loading: false, datamedia: null, error: null };
    default:
      return state;
  }
};

export const moviemediaMenuFilterReducer = (
  state = InitFilterstate,
  action
) => {
  switch (action.type) {
    case MoviemediaActions.SET_MENU_FILTER:
      return { ...state, filterselect: action.filter };
    default:
      return state;
  }
};

export const moviemediaReducer = combineReducers({
  moviemediaFetchReducer,
  moviemediaMenuFilterReducer
});

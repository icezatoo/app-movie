import * as MoviemediaActions from '../actions/moviemedia/moviemedia';
const Initstate = {
  loading: false,
  error: null,
  datavideo: null,
  datamedia: null,
  selectfilter: 0
};

export const moviemediaReducer = (state = Initstate, action) => {
  switch (action.type) {
    case MoviemediaActions.SET_MENU_FILTER:
      return { ...state, selectfilter: state.filter };
    case MoviemediaActions.SET_MOVIE_VIDEO:
      return {
        ...state,
        datavideo: action.videolist
      };
    case MoviemediaActions.REQUESTED_MOVIEIMAGES:
      return {
        ...state,
        datamedia: null,
        loading: false,
        error: null
      };
    case MoviemediaActions.REQUESTED_MOVIEIMAGES_SUCCESS:
      return {
        ...state,
        error: null,
        loading: true,
        datamedia: action.moviemedia
      };
    case MoviemediaActions.REQUESTED_MOVIEIMAGES_ERROR:
      return {
        ...state,
        loading: false,
        datamedia: action.moviemedia,
        error: null
      };
    default:
      return state;
  }
};

// export const moviemediaReducer = combineReducers({
//   moviemediaFetchReducer,
//   moviemediaMenuFilterReducer
// });

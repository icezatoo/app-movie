import * as MovieListActions from '../actions/movielist/movielist';

const Initstate = {
  selectview: 0,
  loading: false,
  error: null,
  datalist: null
};
export const movielistReducer = (state = Initstate, action) => {
  switch (action.type) {
    case MovieListActions.REQUESTED_MOVIELIST:
      return { ...state, datalist: null, loading: false, error: null };
    case MovieListActions.REQUESTED_MOVIELIST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: true,
        datalist: { ...action.movielist }
      };
    case MovieListActions.REQUESTED_MOVIELIST_ERROR:
      return { ...state, loading: true, datalist: null, error: action.error };
    case MovieListActions.SELECT_VIEWLIST:
      return { ...state, selectview: action.payload };
    default:
      return state;
  }
};

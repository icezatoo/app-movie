import * as MoviedetailActions from '../actions/moviedetails/moviedetailaction';
const Initstate = {
  loader: true,
  error: null,
  datamovie: null
};
export const movieReducer = (state = Initstate, action) => {
  switch (action.type) {
    case MoviedetailActions.FETCH_MOVIEDETAIL_SUCCESS:
      return { ...state, datamovie: action.moviedetail };
    case MoviedetailActions.FETCH_MOVIEDETAIL_ERROR:
      return { ...state, error: action.error, loader: false, datamovie: null };
    case MoviedetailActions.SET_LOADER:
      return { ...state, loader: action.loader };
    default:
      return state;
  }
};

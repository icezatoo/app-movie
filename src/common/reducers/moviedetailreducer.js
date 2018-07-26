import * as MoviedetailActions from '../actions/moviedetails/moviedetailaction';

const Initstate = {
  loading: false,
  error: null,
  datamovie: null,
};
export const moviedetailReducer = (state = Initstate, action) => {
  switch (action.type) {
    case MoviedetailActions.REQUESTED_MOVIEDETAIL:
      return { ...state, datamovie: null, loading: false, error: null };
    case MoviedetailActions.REQUESTED_MOVIEDETAIL_SUCCESS:
      return {
        ...state,
        error: null,
        loading: true,
        datamovie: action.moviedetail,
      };
    case MoviedetailActions.REQUESTED_MOVIEDETAIL_ERROR:
      return { ...state, loading: true, datamovie: null, error: action.error };
    default:
      return state;
  }
};

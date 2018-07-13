import * as MovieconfigAction from '../actions/movieconfig/movieconfigaction';
export const movieconfigReducer = (state = {}, action) => {
  switch (action.type) {
    case MovieconfigAction.FETCH_MOVIECONFIG_SUCCESS:
      return { ...state, dataconfig: action.movieconfig };
    case MovieconfigAction.FETCH_MOVIECONFIG_ERROR:
      return { ...state, error: action.error, loader: false, dataconfig: null };
    default:
      return state;
  }
};

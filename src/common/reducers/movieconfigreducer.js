import * as MovieconfigAction from '../actions/movieconfig/movieconfigaction';
const initialState = {
  dataconfig: null,
  loading: false,
  error: null
};
export const movieconfigReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieconfigAction.REQUESTED_MOVIECONFIG:
      return {
        dataconfig: null,
        loading: true,
        error: false
      };
    case MovieconfigAction.REQUESTED_MOVIECONFIG_SUCCESS:
      return {
        ...state,
        dataconfig: action.movieconfig,
        loading: false,
        error: null
      };
    case MovieconfigAction.REQUESTED_MOVIECONFIG_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        dataconfig: null
      };
    default:
      return state;
  }
};

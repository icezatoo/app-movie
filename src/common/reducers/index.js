import { combineReducers } from 'redux';
import { movieReducer } from './moviereducer';
import { movieconfigReducer } from './movieconfigreducer';
export default combineReducers({
  moviedetail: movieReducer,
  movieconfig: movieconfigReducer
});

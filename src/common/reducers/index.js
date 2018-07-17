import { combineReducers } from 'redux';
import { moviedetailReducer } from './moviedetailreducer';
import { movieconfigReducer } from './movieconfigreducer';
export default combineReducers({
  moviedetail: moviedetailReducer,
  movieconfig: movieconfigReducer
});

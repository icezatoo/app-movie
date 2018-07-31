import { combineReducers } from 'redux';
import { moviedetailReducer } from './moviedetailreducer';
import { movieconfigReducer } from './movieconfigreducer';
import { movielistReducer } from './movielistreducer';

export default combineReducers({
  moviedetail: moviedetailReducer,
  movieconfig: movieconfigReducer,
  moviedatalist: movielistReducer,
});

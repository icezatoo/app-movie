import { combineReducers } from 'redux';
import { moviedetailReducer } from './moviedetailreducer';
import { movieconfigReducer } from './movieconfigreducer';
import { moviemediaReducer } from './moviemedia';
export default combineReducers({
  moviedetail: moviedetailReducer,
  movieconfig: movieconfigReducer,
  moviemedia: moviemediaReducer
});

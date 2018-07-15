import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
// Import thunk middleware
import thunk from 'redux-thunk';
import rootReducer from './common/reducers';
import roorSaga from './common/saga/index'

const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
 return {...createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(thunk,sagaMiddleware))),
  runSaga : sagaMiddleware.run(roorSaga)
};
}

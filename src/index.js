import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
import configureStore from './common/store/configureStore';
import * as MovieconfigActions from './common/actions/movieconfig/movieconfigaction';

const store = configureStore();
// const history = createBrowserHistory();
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
store.dispatch(MovieconfigActions.fetchdataconfig());
ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

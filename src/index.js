import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import './index.css';
import configureStore from './configureStore';
import * as MovieconfigActions from './common/actions/movieconfig/movieconfigaction';

const store = configureStore();
const history = createBrowserHistory();
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
store.dispatch(MovieconfigActions.fetchMovieConfig());
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();

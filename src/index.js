import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'
import App from './App';
import * as serviceWorker from './serviceWorker';
axios.defaults.withCredentials = false
axios.defaults.baseURL = "https://cors-anywhere.herokuapp.com/https://skincare-api.herokuapp.com"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

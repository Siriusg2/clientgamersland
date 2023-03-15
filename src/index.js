/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const { REACT_APP_API_URL_LOCAL, REACT_APP_API_URL_DEPLOY } = process.env;

axios.defaults.baseURL = REACT_APP_API_URL_LOCAL || REACT_APP_API_URL_DEPLOY;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

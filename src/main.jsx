import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import App from './App'
import store from './redux/store'



const { VITE_API_URL_LOCAL, VITE_API_URL_DEPLOY } = import.meta.env

axios.defaults.baseURL = VITE_API_URL_LOCAL || VITE_API_URL_DEPLOY

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


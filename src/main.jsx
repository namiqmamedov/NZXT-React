import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
 
import store from './store/store.js';
import { Provider } from 'react-redux';

import ScrollToTop from './components/UI/ScrollToTop/ScrollToTop.jsx';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <ScrollToTop/>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  </React.StrictMode>,
)

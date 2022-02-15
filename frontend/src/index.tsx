import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store/index.js";
import './reset.scss';

render(
  <Provider store={store}>
  <Router >
    <App />
  </Router>
</Provider>,
  document.getElementById('root')
)

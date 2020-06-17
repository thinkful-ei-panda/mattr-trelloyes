import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import STORE from './STORE;
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App store={STORE} />,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import './common.css';
import 'fontsource-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';


const trackingId = 'UA-172954440-1';
ReactGA.initialize(trackingId);
ReactGA.pageview('/');

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

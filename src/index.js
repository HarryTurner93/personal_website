import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import App from './RoutedApp';
import * as serviceWorker from './deprecated/serviceWorker';

ReactGA.initialize('UA-180754451-1'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

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

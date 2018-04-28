import './assets/css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware());

// axios import
require('./axios');

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider> 
    , document.querySelector("#root")
);
registerServiceWorker();

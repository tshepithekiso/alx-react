// task_0/dashboard/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App/App';
import uiReducer from './reducers/uiReducer'; // Import your uiReducer

// Create a Redux store with the uiReducer
const store = createStore(uiReducer);

// Render the App component wrapped with the Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


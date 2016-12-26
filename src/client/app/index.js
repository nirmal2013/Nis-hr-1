import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import AppStore from './redux/store';
import App from './app';

let defaultData = {
  APP_NAME: 'starter',
  UI: {
    type: 'Boilerplate'
  }
};

let shouldExposeReduxTools = true;

let store = AppStore.create(defaultData, shouldExposeReduxTools);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
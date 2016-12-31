import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './app/redux/store';
import App from './app/app';

let store = AppStore.create();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

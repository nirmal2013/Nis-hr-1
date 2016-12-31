import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './app/redux/store';
import App from './app/app';

let defaultData = {
  APP_NAME: 'React Starter',
  UI: {
    type: 'Boilerplate project with node server and webpack (watch)'
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

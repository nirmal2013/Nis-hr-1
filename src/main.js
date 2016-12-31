import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './app/redux/store';
import App from './app/app';

let shouldExposeReduxTools = true;
if(process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV);
  shouldExposeReduxTools = false;
}

let store = AppStore.create(shouldExposeReduxTools);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

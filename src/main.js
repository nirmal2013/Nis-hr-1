import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppStore from 'app/redux/store';
import App from 'app/app';
import Actions from 'app/redux/actions/Actions';
import * as Firebase from 'firebase/app';
import 'app/utils/polyfills';

let shouldExposeReduxTools = true;
if(process.env.NODE_ENV === 'production') {
  shouldExposeReduxTools = false;
}

const store = AppStore.create(shouldExposeReduxTools);

let config =  {
    apiKey: "AIzaSyDVcripcVMe4DVSeJwSutGMwTfWynii-UY",
    authDomain: "nishr-47a55.firebaseapp.com",
    databaseURL: "https://nishr-47a55.firebaseio.com",
    projectId: "nishr-47a55",
    storageBucket: "nishr-47a55.appspot.com",
    messagingSenderId: "1052981110368"
};

firebase.initializeApp(config);
store.dispatch(Actions.UiState.listenToAuthChange());

injectTapEventPlugin();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

import React from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';
import FirstComponent from './component/FirstComponent';

const App = () => {

  FastClick.attach(document.body);

  return (
    <div>
      <p>Webpack watching now! Yay!!</p>
      <FirstComponent name="I'm ESLinted" />
    </div>
  );
};

render(<App />, document.getElementById('app'));

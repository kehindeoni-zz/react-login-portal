import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store, configureFakeAPI } from './helpers';
import { App } from './App';

configureFakeAPI();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

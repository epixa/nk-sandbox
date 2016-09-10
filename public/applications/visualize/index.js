'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import VisualizeApp from './components';

const store = createStore(reducers);

store.subscribe(() => {
  console.log('visualize state', store.getState())
})

const Visualize = () => (
  <Provider store={store} key="visualize">
    <VisualizeApp />
  </Provider>
);

export default Visualize;

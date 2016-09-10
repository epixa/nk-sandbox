'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import DiscoverApp from './components';

const store = createStore(reducers);

store.subscribe(() => {
  console.log('discover state', store.getState())
})

const Discover = () => (
  <Provider store={store} key="discover">
    <DiscoverApp />
  </Provider>
);

export default Discover;

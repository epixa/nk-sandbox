'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import DiscoverApp from './components';

import { applyListeners } from './integrations';

function createProvider({ subscribe }) {
  const store = createStore(reducers);

  applyListeners(store, subscribe);

  store.subscribe(() => {
    console.log('discover state', store.getState())
  })

  return (
    <Provider store={store} key="discover">
      <DiscoverApp />
    </Provider>
  );
}

export default createProvider;

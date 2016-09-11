'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import DiscoverApp from './components';

function createProvider() {
  const store = createStore(reducers);

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

'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import DashboardApp from './components';

function createProvider() {
  const store = createStore(reducers);

  store.subscribe(() => {
    console.log('dashboard store', store.getState());
  });

  return (
    <Provider store={store} key="dashboard">
      <DashboardApp />
    </Provider>
  );
}

export default createProvider;

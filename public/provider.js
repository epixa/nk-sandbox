'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import App from './components';

function createProvider({ applications }) {
  const store = createStore(reducers);

  store.subscribe(() => {
    console.log('core store', store.getState());
  });

  return (
    <Provider store={store}>
      <App applications={applications} />
    </Provider>
  );
}

export default createProvider;

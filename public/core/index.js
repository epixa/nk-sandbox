'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import timepickerIntegration from './integrations/timepicker';
import events from './lib/events';
import reducers from './reducers';
import App from './components';

function createProvider({ applications }) {
  const integrations = events();
  const middleware = applyMiddleware(timepickerIntegration(integrations.broadcast));
  const store = createStore(reducers, middleware);

  // applyEmitters(broadcastMiddleware) ???

  store.subscribe(() => {
    console.log('core store', store.getState());
  });

  return (
    <Provider store={store}>
      <App applications={applications} integrations={integrations} />
    </Provider>
  );
}

export default createProvider;

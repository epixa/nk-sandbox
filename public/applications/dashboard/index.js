'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import DashboardApp from './components';

const store = createStore(reducers);

store.subscribe(() => {
  console.log('dashboard store', store.getState());
});

const Dashboard = () => (
  <Provider store={store} key="dashboard">
    <DashboardApp />
  </Provider>
);

export default Dashboard;

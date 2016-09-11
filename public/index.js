'use strict';

import { render } from 'react-dom';
import createCore from './core';

// todo: figure out a good dev setup/workflow that allows us to load core
// applications in separate javascript files just like we would do with plugins
import dashboard from './applications/dashboard';
import discover from './applications/discover';
import visualize from './applications/visualize';

const coreApplications = [
  {
    name: 'dashboard',
    order: 2,
    component: dashboard
  },
  {
    name: 'discover',
    order: 0,
    component: discover
  },
  {
    name: 'visualize',
    order: 1,
    component: visualize
  },
];

export function renderApp({ applications: pluginApplications, rootElement }) {
  const applications = [
    ...pluginApplications,
    ...coreApplications
  ];
  render(
    createCore({ applications }),
    rootElement
  );
}

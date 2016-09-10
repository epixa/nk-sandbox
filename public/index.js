'use strict';

import { render } from 'react-dom';
import createProvider from './provider';

import dashboard from './applications/dashboard';
import discover from './applications/discover';
import visualize from './applications/visualize';

render(
  createProvider({
    applications: [
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
    ]
  }),
  document.getElementById('root')
);

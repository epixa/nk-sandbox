'use strict';

import React from 'react';
import { sortBy, upperFirst } from 'lodash';

import AppLink from './app_link.js';

const Sidebar = ({ applications }) => (
  <div className="sidebar">
    <div className="logo">Demo</div>

    {sortBy(applications, 'order').map(({ name }) => (
      <AppLink name={name} key={name}>{upperFirst(name)}</AppLink>
    ))}
  </div>
);

export default Sidebar;

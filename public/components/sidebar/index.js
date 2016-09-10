'use strict';

import React from 'react';

import AppLink from './app_link.js';

const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">Demo</div>

    <AppLink>Discover</AppLink>
    <AppLink>Visualize</AppLink>
    <AppLink>Dashboard</AppLink>
  </div>
);

export default Sidebar;

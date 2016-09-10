'use strict';

import React from 'react';

import Application from './application';
import Topnav from './topnav';
import Sidebar from './sidebar';

const App = ({ applications }) => (
  <div>
    <Sidebar applications={applications}></Sidebar>
    <Topnav></Topnav>
    <Application applications={applications}></Application>
  </div>
);

export default App;

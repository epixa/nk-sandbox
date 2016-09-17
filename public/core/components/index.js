'use strict';

import React from 'react';

import Application from './application';
import Topnav from './topnav';
import Sidebar from './sidebar';

const App = ({ applications, integrations }) => (
  <div>
    <Sidebar applications={applications}></Sidebar>
    <Topnav></Topnav>
    <Application applications={applications} integrations={integrations}></Application>
  </div>
);

export default App;

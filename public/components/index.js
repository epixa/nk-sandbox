'use strict';

import React from 'react';

import Application from './application';
import Topnav from './topnav';
import Sidebar from './sidebar';

const App = () => (
  <div>
    <Sidebar></Sidebar>
    <Topnav></Topnav>
    <Application>
      current application
    </Application>
  </div>
);

export default App;

'use strict';

import { combineReducers } from 'redux';

import application from './application';
import sidebar from './sidebar';
import timepicker from './timepicker';
import workarea from './workarea';

export default combineReducers({
  application,
  sidebar,
  timepicker,
  workarea,
});

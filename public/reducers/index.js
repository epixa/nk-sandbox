'use strict';

import { combineReducers } from 'redux';

import sidebar from './sidebar';
import timepicker from './timepicker';
import workarea from './workarea';

export default combineReducers({
  sidebar,
  timepicker,
  workarea,
});

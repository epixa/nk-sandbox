'use strict';

import { combineReducers } from 'redux';

import mainnav from './mainnav';
import timepicker from './timepicker';
import workarea from './workarea';

export default combineReducers({
  mainnav,
  timepicker,
  workarea,
});

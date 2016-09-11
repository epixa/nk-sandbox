'use strict';

import { combineReducers } from 'redux';

import application from './application';
import timepicker from './timepicker';

export default combineReducers({
  application,
  timepicker,
});

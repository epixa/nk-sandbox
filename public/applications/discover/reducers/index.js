'use strict';

import { combineReducers } from 'redux';

import search from './search';
import timepicker from './timepicker';

export default combineReducers({
  search,
  timepicker,
});

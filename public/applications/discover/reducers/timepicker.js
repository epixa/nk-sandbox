'use strict';

const DEFAULT = {};

function searchReducer(state = DEFAULT, action) {
  switch (action.type) {
    case 'timepickerDurationChange':
      return {
        ...state,
        duration: action.duration,
      };
    default:
      return state;
  }
}

export default searchReducer;

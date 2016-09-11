'use strict';

const DEFAULT = {
  duration: '15m'
};

function timepickerReducer(state = DEFAULT, action) {
  switch (action.type) {
    case 'selectTime':
      return {
        ...state,
        duration: action.duration,
      };
    default:
      return state;
  }
}

export default timepickerReducer;

'use strict';

const DEFAULT = {
  current: 'discover',
  all: [
    'discover',
    'visualize',
    'dashboard',
  ]
};

function applicationReducer(state = DEFAULT, action) {
  switch (action.type) {
    case 'switchApplication':
      return {
        ...state,
        current: action.current,
      };
    default:
      return state;
  }
}

export default applicationReducer;

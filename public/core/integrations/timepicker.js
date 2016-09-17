'use strict';

// middleware creator to broadcast integration points to plugins/applications
const integration = broadcast => store => next => action => {
  const result = next(action);

  switch(action.type) {
    case 'selectTime':
      const { timepicker } = store.getState();
      broadcast('core.timepicker.duration', timepicker.duration);
      break;
  }

  return result;
};

export default integration;

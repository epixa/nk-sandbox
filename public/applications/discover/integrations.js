'use strict';

export function applyListeners({ dispatch }, subscribe) {
  subscribe('core.timepicker.duration', duration => {
    dispatch({
      type: 'timepickerDurationChange',
      duration
    });
  });
}

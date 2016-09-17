'use strict';

export default function events() {
  const events = {};

  return {
    subscribe(eventName, handler) {
      initEvents(events, eventName);
      console.log('subscribe', eventName, events);
      events[eventName].push(handler);
    },

    broadcast(eventName, ...args) {
      initEvents(events, eventName);
      console.log('broadcast', eventName, events, ...args);
      events[eventName].forEach(handler => handler(...args));
    }
  };
}

function initEvents(events, name) {
  if (!events[name]) {
    events[name] = [];
  };
}

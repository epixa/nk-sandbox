(() => {
  class Plugin {
    start(core, dependencies) {
      console.log('timepicker start', core);
    }

    stop(core, dependencies) {
      console.log('timepicker stop');
    }
  }

  // the build system would sort this bit out using the default export of the entry
  window.__kbn__.bundles['/plugins/timepicker/plugin.bundle.js'] = Plugin;
})();

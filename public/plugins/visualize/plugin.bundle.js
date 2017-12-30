(() => {
  class Plugin {
    start(core, dependencies) {
      console.log('visualize start', core);
    }

    stop(core, dependencies) {
      console.log('visualize stop');
    }
  }

  // the build system would sort this bit out using the default export of the entry
  window.__kbn__.bundles['/plugins/visualize/plugin.bundle.js'] = Plugin;
})();

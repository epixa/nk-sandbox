(() => {
  class Plugin {
    start(core, dependencies) {
      console.log('visualize plugin start', core);
      const { applicationService, loader } = core;

      applicationService.register('visualize', async ({ targetDomElement }) => {
        console.log('mounting visualize app');
        const bootstrapApp = await loader.loadBundle(`plugins/visualize/app.bundle.js`);
        return bootstrapApp({ targetDomElement });
      });
    }

    stop(core, dependencies) {
      console.log('visualize plugin stop', core);
      const { applicationService } = core;

      applicationService.unregister('visualize');
    }
  }

  // the build system would sort this bit out using the default export of the entry
  window.__kbn__.bundles['/plugins/visualize/plugin.bundle.js'] = Plugin;
})();

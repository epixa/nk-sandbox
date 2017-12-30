(() => {
  function bootstrap({ loader, plugins, config, rootElement }) {
    console.log('core bootstrapping', plugins, config);

    const core = {
      loader,
    };

    plugins.reduce((promise, name) => {
      return promise.then(() => {
        return loader.loadBundle(`plugins/${name}/plugin.bundle.js`)
          .then(Plugin => new Plugin().start(core));
      });
    }, Promise.resolve());
  }

  // the build system would sort this bit out using the default export of the entry
  window.__kbn__.bundles['/core/core.bundle.js'] = bootstrap;
})();

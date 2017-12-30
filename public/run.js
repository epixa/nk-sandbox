(() => {
  Object.assign(window.__kbn__, {
    bundles: {},
    plugins: {},
  });

  const loader = new BundleLoader(window.__kbn__.bundles);

  const {
    plugins,
    injectedVars: config,
  } = window.__kbn__.config

  const rootElement = document.getElementById('root');

  loader.loadBundle('core/core.bundle.js')
    .then(bootstrap => bootstrap({ loader, plugins, config, rootElement }));
})();

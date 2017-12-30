(() => {
  class BundleLoader {
    constructor(bundleTarget) {
      this.bundles = {};
      this.bundleTarget = bundleTarget;
    }

    loadBundle(path) {
      const bundlePath = path.startsWith('/')
        ? path
        : `/${path}`;

      if (!this.bundles[bundlePath]) {
        this.bundles[bundlePath] = new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.type = 'text/javascript'

          script.addEventListener('load', () => {
            resolve(this.bundleTarget[bundlePath] || {});
          });

          script.addEventListener('error', (event) => {
            reject(event.error);
          });

          script.src = bundlePath;
          document.body.appendChild(script);
        });
      }

      return this.bundles[bundlePath];
    }
  };

  Object.assign(window, { BundleLoader });
})();

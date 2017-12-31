(() => {
  async function bootstrap({ loader, plugins, config, rootElement }) {
    console.log('core bootstrapping', plugins, config);

    const appTargetElement = document.createElement('div');
    appTargetElement.id = 'application-target';
    rootElement.appendChild(appTargetElement);

    const core = {
      loader,
      applicationService: new ApplicationService({ targetDomElement: appTargetElement })
    };

    const pluginPromises = plugins.map(async (name) => {
      return loader.loadBundle(`plugins/${name}/plugin.bundle.js`);
    });

    for (const promise of pluginPromises) {
      const Plugin = await promise;
      new Plugin().start(core);
    }

    window.applicationService = core.applicationService;
  }

  class ApplicationService {
    constructor({ targetDomElement }) {
      this.targetDomElement = targetDomElement;
      this.applications = new Map();
      this.current = {};
    }

    async mount(name) {
      if (this.current.name === name) {
        return;
      }
      if (this.current.unmount) {
        await this.current.unmount();
      }

      const mountNewApp = this.applications.get(name);
      const unmount = await mountNewApp(this.targetDomElement);
      this.current = { name, unmount };
    }

    // this would need to be smarter in practice so it could select a default app
    async unmount(name) {
      const existing = this.current;
      this.current = {};
      return await existing.unmount();
    }

    register(name, mount) {
      this.applications.set(name, mount);
    }

    unregister(name) {
      this.applications.delete(name);
    }
  }

  // the build system would sort this bit out using the default export of the entry
  window.__kbn__.bundles['/core/core.bundle.js'] = bootstrap;
})();

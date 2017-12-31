# Dynamically loading plugin/app bundles POC

This proof of concept shows how the same platform architecture from the kibana
server can be used in the browser without loading all of the client-side
JavaScript up front.

All plugin bundles are loaded up front, but application bundles are loaded on
demand. The vast majority of code is written for apps, so it's important that
we don't need to load that code until it is needed.


### The demo

Open up your browser console and pay attention to logs.

Note how the core bundle is loaded first, then the "exported" `bootstrap`
function is invoked, and only then do the individual plugin bundles get loaded.

Once all plugin bundles are loaded, the `start` functions are invoked with the
core contract on each plugin.

Since there is no UI here, applications must be mounted manually via the
applicationService, which is exposed on `window` for this demo:

```js
applicationService.mount('visualize')
```

Note how the app bundle is loaded on the fly this first time it is mounted.
Once the app bundle is loaded, the app function is invoked with a dom element
that it should render to.

Unmount the application to see the application's own "cleanup" function run:

```js
applicationService.unmount('visualize')
```

Now mount the application again:

```js
applicationService.mount('visualize')
```

Note that while the mounting function is invoked again, the bundle is not
reloaded since the code was previously loaded.


### How it works

The bare minimum of .js files are loaded directly from the index.html. All the
rest are loaded via the dynamic script loader.

Bundles are wired together behind the scenes through `window.__kbn__`, though
this implementation detail is abstracted away from even the core itself.

The built bundles for plugins need to be aware of this convention though,
so we'd need to document it and make sure our provided build tool for plugins
handles this automatically from the default export of each plugin.

**lib/loader.js**

This is the dynamic loader class used to asynchronously load script files. For
this POC, the loader does not have direct knowledge of `window.__kbn__`, but it
could. This could be bundled with `run.js`, but I wanted to highlight it for
this POC.

**generated-by-server.js**

This file would be generated on the fly by the kibana server. It embeds things
like injected vars and the array of enabled plugin names. This file initializes
`window.__kbn__`.

**run.js**

This is the file that kicks everything off. It's intentionally simple. It
initializes the loader, loads the core system bundle, and invokes the core
system bootstrap function. It's the glue between `window.__kbn__` and the rest
of the source code.


### Some notes

* There is no dependency mechanism for plugins in this POC, so all plugins are
loaded simultaneously, and the only contract being passed around is the core
contract.
* The mounting process is asynchronous, so support for things like a generic
application loading screen do not require a new feature.
* The mounting process could be made pluggable so something like xpack security
could block mounting denied apps.
* We could destroy the loaded bundle when an app is unmounted if we really
wanted to free up memory. This would mean the bundle needs to be reloaded
though, so you lose the cumulative performance benefit as you navigate between
apps.
* The same loader API could be used on the server as well for dynamically
loading plugin files. The implementation details would need to be entirely
different, though.
* Things like CSP nonces would be trivial to implement on this sort of setup
as they'd be an implementation detail of the loader.

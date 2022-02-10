import { Injectable } from '@angular/core';
import { PluginOptions } from 'smart/plugins-proxy/models/plugin-options';

@Injectable({ providedIn: 'root' })
export class LookupPluginsService {
  lookupPlugins(): Promise<PluginOptions[]> {
    return Promise.resolve([
      {
        type: 'module',
        remoteEntry: 'http://localhost:4400/remoteEntry.js',
        exposedModule: './HelloWorld',

        displayName: 'HelloWorld',
        componentName: 'HelloWorldDumbComponent',
      } as PluginOptions,
      {
        type: 'module',
        remoteEntry: 'http://localhost:4400/remoteEntry.js',
        exposedModule: './HolaTarolas',

        displayName: 'HolaTarolas',
        componentName: 'HolaTarolasDumbComponent',
      } as PluginOptions,
    ]);
  }
}

import { Injectable } from '@angular/core';
import { Microfrontend } from '../../microfrontends/models/microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupMicrofrontsService {
  lookupMicroFronts(): Promise<Microfrontend[]> {
    return Promise.resolve([
      {
        // For Loading
        type: 'module',
        remoteEntry: 'http://localhost:4400/remoteEntry.js',
        exposedModule: './Home',

        // For Routing
        displayName: 'FirstMicrofront',
        routePath: 'firstMicro',
        ngModuleName: 'HomeModule',
      },
    ] as Microfrontend[]);
  }
}

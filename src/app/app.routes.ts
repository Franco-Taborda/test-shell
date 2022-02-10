import { Routes } from '@angular/router';

// import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'firstMicro',
  },
  {
    path: 'plugins',
    loadChildren: () => import('smart/plugins-test/plugins-test.module').then((m) => m.PluginsTestModule),
  },
  // {
  //   path: 'firstMicro',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4400/remoteEntry.js',
  //       exposedModule: './HomeModule',
  //     }).then((m) => m.HomeModule),
  //   // loadChildren: () => import('FirstMicroFront/HomeModule').then((m) => m.HomeModule),
  // },
];

import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'firstMicro',
  },
  {
    path: 'firstMicro',
    loadChildren: () => import('FirstMicroFront/HomeModule').then((m) => m.HomeModule),
  },
];

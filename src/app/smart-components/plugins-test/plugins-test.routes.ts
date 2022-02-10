import { Routes } from '@angular/router';
import { PluginsTestComponent } from './plugins-test.component';

export const PLUGIN_TEST_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PluginsTestComponent,
  },
];

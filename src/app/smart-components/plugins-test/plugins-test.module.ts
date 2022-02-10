import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PluginProxyModule } from 'smart/plugins-proxy/plugin-proxy.module';

import { PluginsTestComponent } from './plugins-test.component';
import { PLUGIN_TEST_ROUTES } from './plugins-test.routes';

@NgModule({
  imports: [CommonModule, PluginProxyModule, RouterModule.forChild(PLUGIN_TEST_ROUTES)],
  exports: [],
  declarations: [PluginsTestComponent],
  providers: [],
})
export class PluginsTestModule {}

import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Input, OnChanges, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginOptions } from './models/plugin-options';

@Component({
  selector: 'app-plugin-proxy',
  templateUrl: './plugin-proxy.component.html',
})
export class PluginProxyComponent implements OnChanges {
  @ViewChild('placeholder', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  @Input() pluginOptions: PluginOptions;

  constructor() {}

  async ngOnChanges(changes: SimpleChanges) {
    const pluginOptions = changes['pluginOptions']?.currentValue;
    this.viewContainerRef.clear();

    if (pluginOptions) {
      const pluginComponent = await loadRemoteModule(pluginOptions).then((m) => m[pluginOptions.componentName]);

      this.viewContainerRef.createComponent(pluginComponent);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { LookupPluginsService } from 'services/microfronts/lookupPlugins.service';
import { PluginOptions } from 'smart/plugins-proxy/models/plugin-options';

@Component({
  selector: 'app-plugins-test',
  templateUrl: './plugins-test.component.html',
  styleUrls: ['./plugins-test.component.scss'],
})
export class PluginsTestComponent implements OnInit {
  availablePlugins: PluginOptions[] = [];
  selectedPlugins: PluginOptions[] = [];

  constructor(private lookupPluginsService: LookupPluginsService) {}

  async ngOnInit() {
    this.availablePlugins = await this.lookupPluginsService.lookupPlugins();
  }

  togglePlugin(plugin: PluginOptions): void {
    const pluginIsSelected = this.selectedPlugins.find((p) => p.exposedModule === plugin.exposedModule);

    if (pluginIsSelected) {
      this.selectedPlugins = this.selectedPlugins.filter((p) => p.exposedModule !== plugin.exposedModule);
    } else {
      this.selectedPlugins.push(plugin);
    }
  }
}

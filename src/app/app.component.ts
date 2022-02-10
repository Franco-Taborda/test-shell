import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { buildRoutes } from 'src/menu-utils';
import { Microfrontend } from './microfrontends/models/microfrontend';
import { LookupMicrofrontsService } from './services/microfronts/lookupMicrofronts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  microfrontends: Microfrontend[] = [];
  pluginsPath = environment.paths.plugins;

  constructor(private router: Router, private lookupMicrofrontsService: LookupMicrofrontsService) {}

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupMicrofrontsService.lookupMicroFronts();

    const routes = buildRoutes(this.microfrontends);

    this.router.resetConfig(routes);
  }
}

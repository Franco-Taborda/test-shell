import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from 'src/menu-utils';
import { LookupService } from './microfrontends/lookup.service';
import { Microfrontend } from './microfrontends/microfrontend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  microfrontends: Microfrontend[] = [];

  constructor(private router: Router, private lookupService: LookupService) {}

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
  }
}

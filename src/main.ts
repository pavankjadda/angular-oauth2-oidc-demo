import {Component, inject, OnInit} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, RouterLink, RouterOutlet} from '@angular/router';
import {routes} from './app/app.routes';
import {provideHttpClient} from '@angular/common/http';
import {OAuthService, provideOAuthClient} from 'angular-oauth2-oidc';
import {authConfig} from './app/auth-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <a routerLink="/">Home</a> | <a routerLink="/employee">Employee</a> |
      <a routerLink="/employee/list">Employee List</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class App implements OnInit {
  oauthService = inject(OAuthService);

  ngOnInit(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin().then(r => console.log(r));
  }
}

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(), provideOAuthClient()],
});

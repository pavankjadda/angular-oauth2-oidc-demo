import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';

/**
 * Authentication guard that checks if the user is logged in and has Read Only User role (ROLE_READONLY_USER)
 * 1. If the user is not logged in, it will redirect to the login page
 * 2. If the user is logged in but does not have Read Only User role, it will redirect to the unauthorized page
 * 3. If the user is logged in and has Read Only User role, it will allow the user to access the route
 *
 * @param next - The activated route snapshot
 * @param state - The router state snapshot
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@Injectable({
	providedIn: 'root',
})
export class ReadOnlyUserAuthGuard implements CanActivate {
	oAuthService = inject(OAuthService);
	router = inject(Router);

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.oAuthService.hasValidIdToken();
	}
}

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://auth.ncats.nih.gov/_api/v2/auth/NCI-CCR-TEST',
  redirectUri: window.location.origin ,
  postLogoutRedirectUri: `${window.location.origin}/logout_success`,
  clientId: 'pres',
  scope: 'openid profile email offline_access api',
  responseType: 'code',
  showDebugInformation: true,
};

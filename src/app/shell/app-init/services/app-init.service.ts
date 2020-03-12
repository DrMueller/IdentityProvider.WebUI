import { Injectable } from '@angular/core';
import { AppSettingsSingletonService } from 'src/app/core/app-settings/services';
import { OidcSecurityService, OpenIdConfiguration } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private appSettingsSingleton: AppSettingsSingletonService
  ) { }

  public async initializeAppAsync(): Promise<void> {
    await this.appSettingsSingleton.initializeAsync();
    this.initializeOidc();
  }

  private initializeOidc(): void {
    const oidcSettings = this.appSettingsSingleton.instance.oidcSettings;
    const config: OpenIdConfiguration = {
      stsServer: oidcSettings.stsServer,
      redirect_url: oidcSettings.redirect_url,
      client_id: oidcSettings.client_id,
      response_type: oidcSettings.response_type,
      scope: oidcSettings.scope,
      post_logout_redirect_uri: oidcSettings.post_logout_redirect_uri,
      start_checksession: oidcSettings.start_checksession,
      silent_renew: oidcSettings.silent_renew,
      silent_renew_url: oidcSettings.silent_renew_url,
      post_login_route: oidcSettings.post_login_route,
      unauthorized_route: oidcSettings.unauthorized_route,
      log_console_warning_active: oidcSettings.log_console_warning_active,
      log_console_debug_active: oidcSettings.log_console_debug_active,
      max_id_token_iat_offset_allowed_in_seconds: oidcSettings.max_id_token_iat_offset_allowed_in_seconds
    };

    this.oidcSecurityService.setupModule(config, oidcSettings.wellKnownEndpoints);

    if (this.oidcSecurityService.moduleSetup) {
      this.oidcSecurityService.authorizedCallbackWithCode(window.location.toString());
    } else {
      this.oidcSecurityService.onModuleSetup.subscribe(() => {
        this.oidcSecurityService.authorizedCallbackWithCode(window.location.toString());
      });
    }
  }
}

export class OidcSettings {
  public stsServer: string;
  public redirect_url: string;
  public client_id: string;
  public response_type: string;
  public scope: string;
  public post_logout_redirect_uri: string;
  public start_checksession: boolean;
  public silent_renew: boolean;
  public silent_renew_url: string;
  public post_login_route: string;
  public forbidden_route: string;
  public unauthorized_route: string;
  public log_console_warning_active: boolean;
  public log_console_debug_active: boolean;
  public max_id_token_iat_offset_allowed_in_seconds: number;
  public wellKnownEndpoints: {
    issuer?: string;
    jwks_uri?: string;
    authorization_endpoint?: string;
    token_endpoint?: string;
    userinfo_endpoint?: string;
    end_session_endpoint?: string;
    check_session_iframe?: string;
    revocation_endpoint?: string;
    introspection_endpoint?: string;
  };
}

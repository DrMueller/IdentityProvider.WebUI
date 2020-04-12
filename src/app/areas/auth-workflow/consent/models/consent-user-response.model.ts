export class ConsentUserResponse {
  public consentAccepted: boolean;
  public consentedScopeNames: string[];
  public rememberConsent: boolean;
  public returnUrl: string;
}

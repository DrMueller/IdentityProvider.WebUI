import { ScopeConsent } from '.';

export class ConsentRequest {
  public allowRememberConsent: boolean;
  public clientName: string;
  public clientUri: string;
  public identityScopes: ScopeConsent[];
  public resourceScopes: ScopeConsent[];
  public returnUrl: string;

  public static createEmpty(): ConsentRequest {
    const result = new ConsentRequest();
    result.identityScopes = [];
    result.resourceScopes = [];

    return result;
  }
}

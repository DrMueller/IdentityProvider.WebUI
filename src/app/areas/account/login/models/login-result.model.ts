export class LoginResult {
  public errorMessage: string;
  public returnUrl: string;
  public wasSuccess: boolean;

  public static createEmpty(): LoginResult {
    const result = new LoginResult();
    result.errorMessage = '';
    result.returnUrl = '';
    result.wasSuccess = false;

    return result;
  }
}

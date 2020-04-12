export class LoginResult {
  public errorMessage: string;
  public successReturnUrl: string;
  public wasSuccess: boolean;

  public static createEmpty(): LoginResult {
    const result = new LoginResult();
    result.errorMessage = '';
    result.successReturnUrl = '';
    result.wasSuccess = false;

    return result;
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/services';
import { ConsentRequest, ConsentUserResponse, ProcessedConsentResult } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {
  private consentRequestSubject: BehaviorSubject<ConsentRequest>;

  public constructor(private http: HttpService) {
    this.consentRequestSubject = new BehaviorSubject(ConsentRequest.createEmpty());
  }

  public get consentRequest$(): Observable<ConsentRequest> {
    return this.consentRequestSubject;
  }

  public createConsentRequest(returnUrl: string): void {
    const params = new HttpParams()
      .append('returnUrl', returnUrl);

    this.http.get$<ConsentRequest>('Consents', params).subscribe(res => {
      this.consentRequestSubject.next(res);
    });
  }

  public sendUserResponse(userResponse: ConsentUserResponse): void {
    this.http.post$<ProcessedConsentResult>('Consents', userResponse).subscribe(res => {
      window.location.href = res.redirectPath;
    });
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppSettingsSingletonService } from '../../app-settings/services';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  public constructor(
    private httpClient: HttpClient,
    private appSettingsSingleton: AppSettingsSingletonService) { }

  public delete$<T>(url?: string | number): Observable<T> {
    const completeUrl = this.createCompleteUrl(url);
    const requestOptions = this.createOptions();
    return this.httpClient.delete<T>(completeUrl, requestOptions);
  }

  public get$<T>(
    url?: string | number,
    params?: HttpParams): Observable<T> {
    const completeUrl = this.createCompleteUrl(url);
    let requestOptions = this.createOptions();

    if (params) {
      requestOptions = Object.assign(requestOptions, {
        params
      });
    }

    return this.httpClient.get<T>(completeUrl, requestOptions);
  }

  public post$<T>(url: string, body: any): Observable<T> {
    const completeUrl = this.createCompleteUrl(url);

    const requestOptions = this.createOptions();
    return this.httpClient.post<T>(completeUrl, body, requestOptions);
  }

  public put$<T>(url: string, body: any): Observable<T> {
    const completeUrl = this.createCompleteUrl(url);
    const requestOptions = this.createOptions();
    return this.httpClient.put<T>(completeUrl, body, requestOptions);
  }

  private createCompleteUrl(url?: string | number): string {
    if (url && (typeof url) === 'string') {
      const urlStr = url as string;
      const httpPattern = /^https?:\/\//i;
      if (httpPattern.test(urlStr)) {
        return urlStr;
      }
    }

    let result = this.appSettingsSingleton.instance.serverBaseUrl;
    if (url) {
      result += url;
    }

    return result;
  }

  private createOptions(): object {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const httpOptions = {
      headers,
      withCredentials: true
    };

    return httpOptions;
  }
}

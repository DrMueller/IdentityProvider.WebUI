import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  public navigateTo(url: string): void {
    window.location.href = url;
  }
}

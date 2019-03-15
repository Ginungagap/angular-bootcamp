import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private activeRequestCount = 0;
  showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  handleRequestStart(): void {
    this.activeRequestCount++;
    if (this.activeRequestCount === 1) {
      this.showSpinner.next(true);
    }
  }

  handleRequestEnd(): void {
    this.activeRequestCount--;
    if (!this.activeRequestCount) {
      this.showSpinner.next(false);
    }
  }
}

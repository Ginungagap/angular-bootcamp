import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {SpinnerService} from '../services/spinner.service';
import {delay, map} from 'rxjs/operators';
import { Observable} from 'rxjs';


@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(public  spinnerService: SpinnerService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerService.handleRequestStart();
    return next.handle(request).pipe(delay(600), map( resp => {
      this.spinnerService.handleRequestEnd();
      return resp;
    }));
  }
}

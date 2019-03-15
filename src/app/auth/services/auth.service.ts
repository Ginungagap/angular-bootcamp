import { Injectable } from '@angular/core';
import { DEFAULT_USERS } from '../default-user';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  defaultUser = DEFAULT_USERS;

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getUser(): any {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  initUser(): any {
    if (sessionStorage.getItem('user')) {
      this.isLoggedIn.next(true);
    }
  }

  isAdmin(): boolean {
    const user = this.getUser();
    return user && user.role === 'admin';
  }

  login(credentials: { username: string, password: string}): Observable<any> {
    const loggedInUser = this.defaultUser.find(
      (user) => user.username === credentials.username && user.password === credentials.password
    );
    return of(loggedInUser).pipe (
      timeout(500),
      map((response) => {
        if (response) {
          sessionStorage.setItem('user', JSON.stringify(loggedInUser));
          this.setIsLoggedIn(true);
        }
        return response;
      })
    );
  }

  logout(): any {
    sessionStorage.removeItem('user');
    this.setIsLoggedIn(false);
  }

  setIsLoggedIn(loggedIn: boolean): void {
    this.isLoggedIn.next(!!loggedIn);
  }
}

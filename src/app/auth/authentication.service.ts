import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError, finalize } from 'rxjs/operators';
import { User } from './user';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Authority } from './authority';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: BehaviorSubject<User> = new BehaviorSubject(null);
  private user$: Observable<User> = this.user.asObservable();
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loggedIn$: Observable<boolean> = this.loggedIn.asObservable();
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  private readonly localStorareUserToken = 'user';

  constructor(private router: Router, private http: HttpClient) {
    // TODO check if local storage has the user
    const savedUser = localStorage.getItem(this.localStorareUserToken);
    if (savedUser) {
      const user: User = JSON.parse(savedUser);
      this.user.next(user);
      this.loggedIn.next(true);
    }
  }

  login(username: string, password: string, rememberMe?: boolean): Observable<object> {
    // TODO check if there is a JSESSIONID and XSRF-TOKEN cookies
    // if not, do a get to get them: https://www.npmjs.com/package/ngx-cookie-service
    // Otherwise, implement rememberme

    const formData: any = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    // WTF!? https://github.com/angular/angular/blob/f8096d499324cf0961f092944bbaedd05364eea1/packages/common/http/src/xsrf.ts#L77-L83
    return this.http.post<Authority[]>('/api/login', formData, { withCredentials: true }).pipe(
      tap((authorities) => {
        this.loggedIn.next(true);
        const user = new User(username);
        user.authorities = authorities;
        localStorage.setItem(this.localStorareUserToken, JSON.stringify(user));
        this.user.next(user);
      }),
      catchError(this.handleError));
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  getUser(): User {
    return this.user.getValue();
  }

  logout(): void {
    // WTF!? https://github.com/angular/angular/blob/f8096d499324cf0961f092944bbaedd05364eea1/packages/common/http/src/xsrf.ts#L77-L83
    this.http.post('/api/logout', { withCredentials: true }).pipe(
      finalize(() => {
        localStorage.removeItem(this.localStorareUserToken);
        this.user.next(null);
        this.loggedIn.next(false);
        this.router.navigate(['/']);
      }),
      catchError(this.handleError)
    ).subscribe();
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}

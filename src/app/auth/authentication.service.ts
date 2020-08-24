import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User } from './user';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    // TODO check if local storage has the user
    const savedUser = localStorage.getItem(this.localStorareUserToken);
    if (savedUser) {
      const user: User = JSON.parse(savedUser);
      this.user.next(user);
      this.loggedIn.next(true);
    }
  }

  login(userName: string, password: string, rememberMe?: boolean): Observable<boolean> {
    return of(true).pipe(
      delay(2000),
      tap(val => {
        this.loggedIn.next(true);
        const user = new User();
        user.firstName = 'Alberto';
        user.lastName = 'Alvarellos';
        user.password = password;
        user.username = userName;
        if (rememberMe) { localStorage.setItem(this.localStorareUserToken, JSON.stringify(user)); }
        this.user.next(user);
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  getUser(): User {
    return this.user.getValue();
  }

  logout(): void {
    localStorage.removeItem(this.localStorareUserToken);
    this.user.next(null);
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

}

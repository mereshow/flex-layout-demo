import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, Router, UrlSegment, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;
    console.warn('In guard - canActivate ...');
    return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const url: string = state.url;
    console.warn('In guard - canActivateChild ...');
    return this.checkLogin(url);
  }


  canLoad(route: Route, segments: UrlSegment[]):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const url: string = route.path;
    console.warn('In guard - canLoad ...');
    return this.checkLogin(segments.join('/'));
  }

  checkLogin(url: string): true | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Redirect to the login page
    return this.router.parseUrl('/login');
  }
}

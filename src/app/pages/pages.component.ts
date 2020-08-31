import { Component, Renderer2, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  loading: boolean;

  constructor(public themeService: ThemeService, private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer,
    public authenticationService: AuthenticationService,
    router: Router, private renderer: Renderer2) {

    this.loading = false;
    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationEnd) {
          this.loading = false;
        }
      }
    );
  }
  ngOnInit(): void {
  }

  setColorMode(change: any): void {
    if (change && change.checked) {
      this.themeService.setDarkTheme();
    }
    else {
      this.themeService.setLightTheme();
    }
  }

}

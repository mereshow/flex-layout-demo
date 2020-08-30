import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { ThemeService } from '../core/services/theme.service';
import { RouterEvent, NavigationStart, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {

    private mediaWatcher: Subscription;
    isMobileView: boolean;
    loading: boolean;

    constructor(mediaObserver: MediaObserver,
        public themeService: ThemeService,
        public authenticationService: AuthenticationService,
        router: Router) {
        this.mediaWatcher = mediaObserver.asObservable().
            subscribe((change: MediaChange[]) => {
                // TODO: the first element is the active breakpoint. Investigate a better approach 
                // to cover a more general case
                this.setMobileContent(change[0].mqAlias === 'xs');
            });

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

    ngOnDestroy(): void {
        this.mediaWatcher.unsubscribe();
    }

    setColorMode(change: any): void {
        if (change && change.checked) { this.themeService.setDarkTheme(); }
        else { this.themeService.setLightTheme(); }
    }

    setDarkMode(): void {
        this.themeService.setDarkTheme();
    }

    setLightMode(): void {
        this.themeService.setLightTheme();
    }

    setMobileContent(isMobile: boolean): void {
        this.isMobileView = isMobile;
    }

}

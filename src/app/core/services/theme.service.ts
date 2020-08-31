import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NotificationService } from './notification.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: CoreModule
})
export class ThemeService {

  private darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  darkMode$: Observable<boolean> = this.darkMode.asObservable();

  constructor(@Inject(DOCUMENT) private document,
    private notificationService: NotificationService, private overlayContainer: OverlayContainer) {
  }

  setLightTheme(): void {
    this.document.body.classList.remove('app-dark-theme');
    this.overlayContainer.getContainerElement().classList.remove('app-dark-theme');
    this.darkMode.next(false);
  }

  setDarkTheme(): void {
    this.document.body.classList.add('app-dark-theme');
    this.overlayContainer.getContainerElement().classList.add('app-dark-theme');
    this.darkMode.next(true);
  }
}

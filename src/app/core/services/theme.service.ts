import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NotificationService } from './notification.service';
import { NotificationType } from '../model/notification-type.enum';

@Injectable({
  providedIn: CoreModule
})
export class ThemeService {

  private darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  darkMode$: Observable<boolean> = this.darkMode.asObservable();

  constructor(private notificationService: NotificationService, private overlayContainer: OverlayContainer) {
  }

  setLightTheme(): void {
    this.overlayContainer.getContainerElement().classList.remove('app-dark-theme');
    this.darkMode.next(false);
  }

  setDarkTheme(): void {
    this.overlayContainer.getContainerElement().classList.add('app-dark-theme');
    this.darkMode.next(true);
  }
}

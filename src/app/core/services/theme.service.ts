import { Injectable, Inject, OnInit } from '@angular/core';
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
  elem;

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

  ngOnInit() {
    this.elem = document.documentElement;
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}

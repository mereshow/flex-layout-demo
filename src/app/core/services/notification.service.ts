import { Injectable } from '@angular/core';
import { NotificationType } from '../model/notification-type.enum';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreModule } from '../core.module';
import { NotificationComponent } from '../model/notification/notification.component';

@Injectable({
  providedIn: CoreModule
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  private notify(notificationType: NotificationType, message: string): void {
    this.snackBar.openFromComponent(NotificationComponent,
      { duration: 3000, data: { notificationType, message } });
  }

  info(message: string): void {
    this.notify(NotificationType.Info, message);
  }

  success(message: string): void {
    this.notify(NotificationType.Success, message);
  }

  warn(message: string): void {
    this.notify(NotificationType.Warning, message);
  }

  error(message: string): void {
    this.notify(NotificationType.Error, message);
  }
}

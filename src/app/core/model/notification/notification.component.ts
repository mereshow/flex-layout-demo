import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { NotificationType } from '../notification-type.enum';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  color: string;
  icon: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { notificationType: NotificationType, message: string }) {
    this.setColor(data.notificationType);
    this.setIcon(data.notificationType);
  }

  ngOnInit(): void {
  }

  private setColor(notificationType: NotificationType): void {

    switch (notificationType) {
      case NotificationType.Success: {
        this.color = 'primary';
        break;
      }
      case NotificationType.Success: {
        this.color = 'accent';
        break;
      }
      case NotificationType.Warning: {
        this.color = 'accent';
        break;
      }
      case NotificationType.Error: {
        this.color = 'warn';
        break;
      }
    }
  }

  private setIcon(notificationType: NotificationType): void {
    switch (notificationType) {
      case NotificationType.Info: {
        this.icon = 'message';
        break;
      }
      case NotificationType.Success: {
        this.icon = 'done';
        break;
      }
      case NotificationType.Warning: {
        this.icon = 'warning';
        break;
      }
      case NotificationType.Error: {
        this.icon = 'error';
        break;
      }
    }
  }
}

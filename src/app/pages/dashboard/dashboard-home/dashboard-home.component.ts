import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Greeting } from '../greeting';
import { NotificationService } from '../../../core/services/notification.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  greeting: Greeting = { id: 0, content: '' };

  constructor(private dashboardService: DashboardService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.dashboardService.getGreeting().
      pipe(tap(data => console.log(data))).
      subscribe(
        greeting => this.greeting.content = greeting,
        err => {
          this.greeting = { id: 0, content: '' };
          this.notificationService.error('Error retrieving data');
        }
      );
  }
}

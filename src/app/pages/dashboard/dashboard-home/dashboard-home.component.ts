import { Component, OnInit, HostBinding } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;

  constructor(private logger: NGXLogger) {
  }

  ngOnInit() {
  }
}

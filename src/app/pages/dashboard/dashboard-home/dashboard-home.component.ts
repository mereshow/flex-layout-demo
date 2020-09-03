import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Greeting } from '../greeting';
import { NotificationService } from '../../../core/services/notification.service';
import { tap } from 'rxjs/operators';
import { EChartOption } from 'echarts';
import { ThemeService } from 'src/app/core/services/theme.service';
import { NgxEchartsConfig } from 'ngx-echarts/lib/ngx-echarts.directive';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  initOpts = {
    renderer: 'svg'
  };

  echartsIntance: any;

  chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  greeting: Greeting = { id: 0, content: '' };

  constructor(private dashboardService: DashboardService,
    private notificationService: NotificationService,
    public themeService: ThemeService) {
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

  onChartInit(ec) {
    this.echartsIntance = ec;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }
}

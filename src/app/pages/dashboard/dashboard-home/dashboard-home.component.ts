import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnDestroy {

  private charts: any[] = [];


  chartInitOpts = {
    renderer: 'svg'
  };

  chartOption: EChartOption = {
    title: {
      text: 'Chart title',
      subtext: 'Mocking Data',
      left: 'center'
    },
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

  onChartInit(e: any): void {
    this.charts.push(e);
    console.log('Chart id:', e.id);
  }

  ngOnDestroy(): void {
    console.error('OnDestroy called!');
    /* for (const chart of this.charts) {
      chart.clear();
      chart.dispose();
    } */

    /*for (const map of this.maps) {
      if (map && map.remove) {
        
        map.off();
        map.remove();
      }
  
    } */
  }

  /* @HostListener('window:resize')
  onResize() {
    for (const chart of this.charts) {
      chart.resize();
    }
  } */
}

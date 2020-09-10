import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { EChartOption } from 'echarts';
import { Map, latLng, tileLayer, circle, polygon } from 'leaflet';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponentNoGap implements OnDestroy {

  private maps: Map[] = [];
  private charts: any[] = [];

  mapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      'Big Circle': circle([46.95, -122], { radius: 5000 }),
      'Big Square': polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
    }
  }

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


  // TODO: read https://github.com/Asymmetrik/ngx-leaflet/issues/104
  onMapReady(map: Map): void {
    console.error('OnMapReady called!');
    this.maps.push(map);
    // Fix the map fully displaying (if neccessary), existing leaflet bug
    /* setTimeout(() => {
      map.invalidateSize();
    }, 0); */
  }

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

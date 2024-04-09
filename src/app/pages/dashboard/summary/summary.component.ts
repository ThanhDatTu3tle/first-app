import * as Highcharts from 'highcharts';
import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['../../../../../node_modules/primeflex/primeflex.scss']
})
export class SummaryComponent implements OnInit {
  items: MenuItem[] = [];
  home!: MenuItem;
  sidebarVisible: boolean = false;
  shopTC: number = 125;
  shopKTC: number = 33;

  constructor() { };

  ngOnInit() {
    this.items = [{ label: 'Dashboard' }, { label: 'Summary' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  };

  HighchartsPieStatus: typeof Highcharts = Highcharts;
  chartPieStatusOptions: Highcharts.Options = {
    title: { text: '' },
    tooltip: {
      split: true,
      headerFormat: '',
      headerShape: 'callout',
      valueSuffix: '%',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b>{point.name}</b><br/>' +
        '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          alignTo: 'plotEdges',
          connectorShape: 'straight',
          enabled: true,
          distance: 60
        },
        center: ['50%', '50%'],
        showInLegend: true
      }
    },
    series: [{
      borderWidth: 1,
      data: [{
        name: `Số cửa hàng - TC: ${this.shopTC} cửa hàng`,
        color: '#22C55E',
        y: 79.1
      }, {
        sliced: true,
        selected: true,
        name: `Số cửa hàng - KTC: ${this.shopKTC} cửa hàng`,
        color: '#FF3D32',
        y: 20.9
      }],
      innerSize: '44%',
      type: 'pie'
    }]
  }

  HighchartsPieReason: typeof Highcharts = Highcharts;
  charPieReasonOptions: Highcharts.Options = {
    title: { text: '' },
    tooltip: {
      split: true,
      headerFormat: '',
      headerShape: 'callout',
      valueSuffix: '%',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b>{point.name}</b><br/>' +
        '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          alignTo: 'plotEdges',
          connectorShape: 'straight',
          enabled: true,
          distance: 1
        },
        center: ['50%', '50%'],
        showInLegend: true
      }
    },
    series: [{
      borderWidth: 1,
      data: [{
        name: 'Không phải là CH FMCG 2 BC',
        y: 6.1,
        sliced: true,
        selected: true
      }, {
        name: 'Không phải tham gia trưng bày 23 BC',
        y: 69.7,
        sliced: true,
        selected: true
      }, {
        name: 'Cửa hàng không hợp tác 3BC',
        y: 9.1,
        sliced: true,
        selected: true
      }, {
        name: 'Đóng cửa 5 BC',
        y: 15.2,
        sliced: true,
        selected: true
      }],
      innerSize: '44%',
      type: 'pie'
    }]
  }

  HighchartsColumn: typeof Highcharts = Highcharts;
  chartColumn: Highcharts.Options = {
    title: { text: '' },
    xAxis: {
      categories: [
        '2024-03-22',
        '2024-03-23',
        '2024-03-24',
        '2024-03-25',
        '2024-03-26',
        '2024-03-27',
        '2024-03-28',
        '2024-03-29',
        '2024-03-30',
        '2024-03-31'
      ],
      crosshair: false,
      accessibility: {
        description: 'Countries'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: '',
      data: [
        { y: 0, color: '#2CAFFE' },
        { y: 19, color: '#2CAFFE' },
        { y: 0, color: '#2CAFFE' },
        { y: 19, color: '#2CAFFE' },
        { y: 37, color: '#2CAFFE' },
        { y: 22, color: '#2CAFFE' },
        { y: 24, color: '#2CAFFE' },
        { y: 19, color: '#2CAFFE' },
        { y: 15, color: '#2CAFFE' },
        { y: 13, color: '#2CAFFE' }
      ],
      type: 'column'
    }]
  }

  HighchartsBar: typeof Highcharts = Highcharts;
  chartBar: Highcharts.Options = {
    title: { text: '' },
    xAxis: {
      categories: [
        'TRẦN ĐAI NGHĨA',
        'NGUYỄN THỊ THÙY LINH',
        'LƯU ĐÌNH VŨ',
        'KHỔNG ĐÌNH QUÂN',
        'LƯƠNG VĂN THÀNH'
      ],
      crosshair: false,
      accessibility: {
        description: 'Countries'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: '',
      data: [
        { y: 8, color: '#B3FFFF' },
        { y: 6, color: '#B3E7FF' },
        { y: 5, color: '#B4B3FF' },
        { y: 5, color: '#FFB3FE' },
        { y: 5, color: '#FFB3D9' }
      ],
      type: 'bar'
    }]
  }
};

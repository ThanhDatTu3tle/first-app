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

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'variable pie',
    },
    title: {
      text: '',
    },
    // tooltip: {
    //   pointFormat: '{point.z}'
    // },
    series: [{   
      borderWidth: 5, 
      data: [{
        name: 'Số cửa hàng đã khảo sát',
        color: '#009933',
        y: 125
      }, {
        name: 'Số cửa hàng đã khảo sát',
        color: '#FA8072',
        y: 33
      }],
      innerSize: '77%',
      type: 'pie'
    }]
  };

  ngOnInit() {
    this.items = [{ label: 'Dashboard' }, { label: 'Summary' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}

import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
  '../../../../node_modules/primeflex/primeflex.scss']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] = [];
  home!: MenuItem;
  sidebarVisible: boolean = false;

  ngOnInit() {
    this.items = [{ label: 'Dashboard' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}

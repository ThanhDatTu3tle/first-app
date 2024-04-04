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

  ngOnInit() {
    this.items = [{ label: 'Dashboard' }, { label: 'Summary' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}

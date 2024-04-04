import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sellout',
  templateUrl: './sellout.component.html',
  styleUrls: ['../../../../../node_modules/primeflex/primeflex.scss']
})
export class SelloutComponent implements OnInit {
  items: MenuItem[] = [];
  home!: MenuItem;
  sidebarVisible: boolean = false;

  ngOnInit() {
    this.items = [{ label: 'Dashboard' }, { label: 'Sellout' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}

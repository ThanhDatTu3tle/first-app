import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['../../../../../node_modules/primeflex/primeflex.scss']
})
export class GiftsComponent implements OnInit {
  items: MenuItem[] = [];
  home!: MenuItem;

  ngOnInit() {
    this.items = [{ label: 'Activation' }, { label: 'Gifts' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}

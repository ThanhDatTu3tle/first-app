import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['../../../../../node_modules/primeflex/primeflex.scss']
})
export class PromotionComponent implements OnInit {
  items: MenuItem[] = [];
  home!: MenuItem;

  ngOnInit() {
    this.items = [{ label: 'Activation' }, { label: 'Promotion' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}

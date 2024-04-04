import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['../../../../../node_modules/primeflex/primeflex.scss']
})
export class TasklistComponent implements OnInit {
  items: MenuItem[] = [];
  home!: MenuItem;

  ngOnInit() {
    this.items = [{ label: 'Workfollow' }, { label: 'Task list' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}

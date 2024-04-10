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
  day: Date = new Date();
  today: string | undefined;
  rangeDates: Date[] | undefined;
  mondayStart: string | undefined;
  mondayEnd: string | undefined;
  dateRangeAWeek: string | undefined;

  constructor() { }

  ngOnInit() {
    this.items = [{ label: 'Dashboard' }, { label: 'Sellout' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.today = this.day.getDate() + '/' + (this.day.getMonth()+1) + '/' + this.day.getFullYear();
    
    this.mondayStart = (this.day.getDate() - this.day.getDay() + 1) + '/' + (this.day.getMonth()+1) + '/' + this.day.getFullYear();
    this.mondayEnd = (this.day.getDate() - this.day.getDay() + 8) + '/' + (this.day.getMonth()+1) + '/' + this.day.getFullYear();
    this.dateRangeAWeek = this.mondayStart + ' - ' + this.mondayEnd;
  }
}

import { Component } from '@angular/core';

import data from '../../employeesData.json';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss',
  '../../../../node_modules/primeflex/primeflex.css']
})
export class UserProfileComponent {
  employeesData: any = data;

  constructor() {
    // console.log(this.employeesData);
  }
}
